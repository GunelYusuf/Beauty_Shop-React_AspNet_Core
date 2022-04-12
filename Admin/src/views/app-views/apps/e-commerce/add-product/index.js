import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import {Tabs, Form, Button, message, Input, Row, Col, Card, Upload, InputNumber, Select, Checkbox} from 'antd';
import Flex from 'components/shared-components/Flex'
import { ImageSvg } from 'assets/svg/icon';
import CustomIcon from 'components/util-components/CustomIcon'
import { LoadingOutlined } from '@ant-design/icons';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {useHistory} from "react-router-dom";


const { TabPane } = Tabs;

const { Dragger } = Upload;
const { Option } = Select;


const rules = {
	name: [
		{
			required: true,
			message: 'Please enter product name',
		}
	],
	description: [
		{
			required: true,
			message: 'Please enter product description',
		}
	],
	price: [
		{
			required: true,
			message: 'Please enter product price',
		}
	],
	quantity: [
		{
			required: true,
			message: 'Please enter item cost',
		}
	]
}

const beforeUpload = file => {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!');
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error('Image must smaller than 2MB!');
	}
	return isJpgOrPng && isLt2M;
}

const AddProduct = () => {

	let history = useHistory();
	const [form] = Form.useForm();
	// const [uploadedImg, setImage] = useState('')
	// const [submitLoading, setSubmitLoading] = useState(false)
	const [data,setData]=useState([])
	const [tag,setTag]=useState([])
	const [color,setColor]=useState([])
	const [campaign,setCampaign]=useState([])
	const [fileList, setFileList] = useState([]);
	const [FileSend, setFileSend] = useState([]);


	const propsUpload = {
		onRemove: (file) => {
			const index = fileList.indexOf(file);
			const newFileList = fileList.slice();
			newFileList.splice(index, 1);

			return setFileList(newFileList)
		},
		beforeUpload: (file) => {
			setFileList([...fileList, file]);
			return false;
		},
		onChange(info) {
			const listFiles = info.fileList.slice(-3);

			const newArrayFiles  = listFiles.map((file) => file.originFileObj? (file.originFileObj) : file );

			const anAsyncFunction = async (item) => {
				return convertBase64(item)
			}

			const getData = async () => {
				return Promise.all(newArrayFiles.map((item) => anAsyncFunction(item)))
			}
			getData().then(data => {
				setFileSend(data)
				console.log(data);
			})
		},
		multiple:true,
		fileList: fileList,
	};
	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file)
			fileReader.onload = () => {
				resolve(fileReader?.result);
			}
			fileReader.onerror = (error) => {
				reject(error);
			}
		})
	}

	// const handleUploadChange = e => {
	// 	setImage(e.target.files[0])
	// 	console.log(e.file[0])
	// };

	useEffect( ()=>{

		const fetchTag = async () => {
			try {
				const response = await axios.get("https://localhost:5001/api/Product/GetAllTags");
				console.log(response.data)
				setTag(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchTag()

	},[])


	useEffect( ()=>{

		const fetchColor = async () => {
			try {
				const response = await axios.get("https://localhost:5001/api/Product/GetAllColors");
				setColor(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchColor()

	},[])


	useEffect( ()=>{

		const fetchCampaign = async () => {
			try {
				const response = await axios.get("https://localhost:5001/api/Product/GetAllCampaigns");
				setCampaign(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchCampaign()

	},[])


	useEffect( ()=>{

		const fetchData = async () => {
			try {
				const response = await axios.get("https://localhost:5001/api/Category");
				setData(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()

	},[])
	console.log(data)







	const onSubmit = (e) => {

		form.validateFields().then(values => {



			const formData = new FormData();

			formData.append("name",form.getFieldValue("name"))
			formData.append("description",form.getFieldValue("description"))
			formData.append("price",form.getFieldValue("price"))
			formData.append("quantity",form.getFieldValue("quantity"))
			formData.append("productCode",form.getFieldValue("productCode"))
			formData.append("availibility",form.getFieldValue("availibility"))
            const newtagIdList = form.getFieldValue("tagId")
            for (const tagId in newtagIdList) {
                formData.append('tagId', newtagIdList[tagId])
            }
            const newcolorIdList = form.getFieldValue("colorId")
            for (const colorId in newcolorIdList) {
                formData.append('colorId', newcolorIdList[colorId])
            }

			formData.append("campaignId",form.getFieldValue("campaignId"))
			formData.append("categoryId",form.getFieldValue("categoryId"))
			for (const key in fileList) {
				formData.append('files', fileList[key])
			}

			const createProduct = async  () =>{
				await axios.post("https://localhost:5001/api/Product",formData,{
					headers: {'Content-Type': 'multipart/form-data'}

				}).then(()=>{
					toast.success(`Created ${values.name} to product list`);
					history.push(`/app/apps/ecommerce/product-list`)
				}).catch((err)=>{

					console.log(err)
					toast.error(`${err.message} `)
				})

			}
			createProduct()


		}).catch(info => {

			console.log('info', info)
			message.error('Please enter all required field ');
		});
	};
	return (
		<>
			<ToastContainer/>
			<Form
				layout="vertical"
				form={form}
				onFinish={onSubmit}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="between" alignItems="center">
							<h2 className="mb-3">Add New Product</h2>
							<div className="mb-3">
								<Button className="mr-2">Discard</Button>
								<Button type="primary" htmlType="submit" >
									Add
								</Button>
							</div>
						</Flex>
					</div>
				</PageHeaderAlt>
				<div className="container">
					<Tabs defaultActiveKey="1" style={{marginTop: 30}}>
						<TabPane tab="General" key="1">
							<Row gutter={16}>

								<Col xs={24} sm={24} md={17}>
									<Card title="Basic Info">
										<Form.Item name="name" label="Product name" rules={rules.name}>
											<Input placeholder="Product Name"/>
										</Form.Item>
										<Form.Item name="description" label="Description" rules={rules.description}>
											<Input.TextArea rows={4}/>
										</Form.Item>
									</Card>
									<Card title="Pricing">
										<Row gutter={16}>
											<Col xs={24} sm={24} md={12}>
												<Form.Item name="price" label="Price" rules={rules.price}>
													<InputNumber
														className="w-100"
														formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
														parser={value => value.replace(/\$\s?|(,*)/g, '')}
													/>
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={12}>
												<Form.Item name="quantity" label="Quantity" rules={rules.quantity}>
													<InputNumber
														className="w-100"
														value={0}
														formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
														parser={value => value.replace(/\$\s?|(,*)/g, '')}
													/>
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={12}>
												<Form.Item name="productCode" label="Product Code">
													<Input
														className="w-100"
														placeholder="Product Code"
													/>
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={12}>
												<Form.Item name="campaignId" label="Campaigns">
													<Select mode="campaign" style={{width: '100%'}} placeholder="Campaign">
														{campaign.map(elm => (<Option value={elm.id} key={elm.id}>{elm.discount}%</Option>))}
													</Select>
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={12}>
											<Form.Item valuePropName="checked" name="availibility" initialValue={false}>
												<Checkbox checked>Availibility</Checkbox>
											</Form.Item>
											</Col>
										</Row>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={7}>
									<Card title="Media">
										<Upload.Dragger
											{...propsUpload}
											listType='picture-card'
											accept='.png,.jpg,.jpeg'
											maxCount={5}
										>
											<Button>
												Upload
											</Button>
										</Upload.Dragger>
									</Card>
									<Card title="Organization">
										<Form.Item name="categoryId" label="Category">
											<Select className="w-100" placeholder="Category">
												{
													data.map(elm => (
														<Option value={elm.id} key={elm.id}>{elm.name}</Option>
													))
												}
											</Select>
										</Form.Item>
										<Form.Item name="tagId" label="Tags">
											<Select mode="tags" style={{width: '100%'}} placeholder="Tags">
												{tag.map(elm => (<Option value={elm.id} key={elm.id}>{elm.name}</Option>))}
											</Select>
										</Form.Item>
										<Form.Item name="colorId" label="Colors">
											<Select mode="tags" style={{width: '100%'}} placeholder="Colors">
												{color.map(elm => <Option value={elm.id} key={elm.id}>{elm.name}</Option>)}
											</Select>
										</Form.Item>
									</Card>

								</Col>

							</Row>
						</TabPane>
					</Tabs>
				</div>
			</Form>
		</>
	)
}

export default AddProduct
