import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import {Tabs, Form, Button, message, Input, Row, Col, Card, InputNumber, Select, Checkbox} from 'antd';
import Flex from 'components/shared-components/Flex'
import { toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import PhotoUpload from "./PhotoUpload";


const { TabPane } = Tabs;
const { Option } = Select;



const EditProduct = () => {

	const param = useParams();

	let history = useHistory();
	const [form] = Form.useForm();

	const [submitLoading, setSubmitLoading] = useState(false)
	const [list,setList]=useState([])
    const [data,setData]=useState([])
	const [tag,setTag]=useState([])
	const [color,setColor]=useState([])
	const [campaign,setCampaign]=useState([])


	const [fileList, setFileList] = useState([]);
	const [FileSend, setFileSend] = useState([]);
	const [currentPhoto, setCurrentPhoto] = useState([])
	const [deletedPhoto, setDeletedPhoto] = useState([])

	const DeletedPhotos = (id) => {
		setCurrentPhoto(currentPhoto.filter(item => item.id !== id))
		setDeletedPhoto([...deletedPhoto,...currentPhoto.filter(item => item.id===id)])
	}

	useEffect( ()=>{

		const fetchTag = async () => {
			try {
				const response = await axios.get("https://localhost:5001/api/Product/GetAllTags");
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

		const fetchCategories = async () => {
			try {
				const response = await axios.get("https://localhost:5001/api/Category");
				setData(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchCategories()

	},[])


	const fetchData = async (id) => {
		try {
			const response = await axios.get(`https://localhost:5001/api/Product/${id}`);
			setCurrentPhoto(response.data.productPhoto)
            setList(response.data)
			form.setFieldsValue({
				tagId: response.data.productTags.map(item => item && item.id),
				name:response.data.name,
				campaignId: response.data.campaignId,
				description:response.data.description,
				price:response.data.price,
				categoryId:response.data.categoryId,
				productCode:response.data.productCode,
				quantity:response.data.quantity,
				availibility:response.data.availibility,
				colorId:response.data.productColor.map(item => item && item.id)}
			)

		} catch (error) {
			console.log(error)
		}
	}


	useEffect(() => {

		 fetchData(param.id)

	}, [form]);





 const onSubmit = (e) => {

		setSubmitLoading(true)
		form.validateFields().then(values => {

			setSubmitLoading(false)
			const formData = new FormData();
			formData.append("id",form.getFieldValue("id"))
			formData.append("name",form.getFieldValue("name"))
			formData.append("description",form.getFieldValue('description'))
			formData.append("price",form.getFieldValue('price'))
			formData.append("quantity",form.getFieldValue('quantity'))
			formData.append("productCode",form.getFieldValue('productCode'))
			formData.append("availibility",form.getFieldValue('availibility'))
			formData.append("categoryId",form.getFieldValue('categoryId'))
            formData.append("campaignId",form.getFieldValue("campaignId"))
			const newtagIdList = form.getFieldValue('tagId')

			for (const i in newtagIdList) {
				formData.append('tagId', newtagIdList[i])
			}
			const newcolorIdList = form.getFieldValue("colorId")
            for (const i in newcolorIdList) {
				formData.append('colorId', newcolorIdList[i])

			}

			deletedPhoto.map((item) => {
				formData.append("deletedPhotoId",item.id)
			})
			for (const key in fileList) {
				formData.append('files', fileList[key])
			}

            const updateProduct = async () =>{
				await axios.put(`https://localhost:5001/api/Product/`,formData,{
					headers: {'Content-Type': 'multipart/form-data'}

				}).then(() =>{
					toast.success(`Saved ${values.name} to product list`);
					history.push(`/app/apps/ecommerce/product-list`)
				}).catch((err)=>{

					console.log(err.data)
					toast.error(`${err.message} `)
				})

			}
			updateProduct()


		}).catch(info => {
			setSubmitLoading(false)
			console.log('info', info)
			message.error('Please enter all required field ');
		});
	};

	return (
		<>
			<Form
				layout="vertical"
				form={form}
				onFinish={onSubmit}
				list={list}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="between" alignItems="center">
							<h2 className="mb-3">Edit Product</h2>
							<div className="mb-3">
								<Button className="mr-2">Discard</Button>
								<Button type="primary" htmlType="submit" loading={submitLoading} >
									Save
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
									<Form.Item name="id" initialValue={param.id}>
										<Input type="hidden"/>
									</Form.Item>
									<Card title="Basic Info">
										{list.name!==undefined?
											<Form.Item name="name" label="Product name" initialValue={list.name}>
												<Input  style={{width: "400px"}} placeholder="Product Name" onChange={(e) =>{setList({...list,name:e.target.value})}} />
											</Form.Item>: null
										}
										{list.description!==undefined?
											<Form.Item name="description" initialValue={list.description} label="Description">
												<Input.TextArea rows={4} onChange={(e) =>{setList({...list,description:e.target.value})}} />
											</Form.Item>: null
										}

									</Card>
									<Card title="Pricing">
										<Row gutter={16}>
											<Col xs={24} sm={24} md={12}>
												{list.price !== undefined ?
													<Form.Item name="price" label="Price">
                                                        <InputNumber
															className="w-100"
															initialValue={list.price}
															formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
															parser={value => value.replace(/\$\s?|(,*)/g, '')}

														/>
													</Form.Item>:null
												}
											</Col>
											<Col xs={24} sm={24} md={12}>
												{list.quantity !== undefined ?
												<Form.Item name="quantity" label="Quantity" >
													<InputNumber
														className="w-100"
														initialValue={list.quantity}
														formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
														parser={value => value.replace(/\$\s?|(,*)/g, '')}

													/>
												</Form.Item>:null
												}
											</Col>
											<Col xs={24} sm={24} md={12}>
												{list.productCode !== undefined ?
												<Form.Item name="productCode" label="Product Code">
													<Input
														initialValue={list.productCode}
														className="w-100"
														placeholder="Product Code"
														onChange={(e) => {
															setList({...list, productCode: e.target.value})
														}}
													/>
												</Form.Item>:null}
											</Col>
											<Col xs={24} sm={24} md={12}>
												{list.campaignId  !== undefined && campaign.length>0 ?
													<Form.Item name="campaignId" label="Campaigns" >
														<Select mode="campaign" style={{width: '100%'}} placeholder="Campaign" defaultValue={campaign?.find(item => item.id === list.campaignId).discount +"%"} onSelect={(value,event) => {
															setList({...list, campaignId:value})
														}} >
															{campaign.map(elm => (<Option value={elm.id} key={elm.id}>{elm.discount}%</Option>))}
														</Select>
													</Form.Item>:null
												}

											</Col>
											<Col xs={24} sm={24} md={12}>
												<Form.Item valuePropName="checked" name="availibility" initialValue={list.availibility}>
													<Checkbox  onChange={(e) =>{setList({...list,availibility:e.target.checked})}} checked={list.availibility}>Availibility</Checkbox>
												</Form.Item>
											</Col>
										</Row>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={7}>
									<Card title="Media">
										<Form.Item name='file' >
                                             <PhotoUpload
												 setFileList={setFileList}
												 fileList={fileList}
												 FileSend={FileSend}
												 setFileSend={setFileSend}
												 currentPhoto={currentPhoto}
												 DeletedPhotos={DeletedPhotos}
											 />
										</Form.Item>
									</Card>
									<Card title="Organization">
										{list.categoryId !== undefined && data.length > 0 ?
											<Form.Item name="categoryId" label="Categories" >
												<Select  style={{width: '100%'}} placeholder="Category" defaultValue={data?.find(item => item.id === list.categoryId).name} onSelect={(value,event) => {
													setList({...list, categoryId:value})
												}} >
													{data?.map(elm => (<Option value={elm.id} key={elm.id}>{elm.name}</Option>))}
												</Select>
											</Form.Item>:null
										}

										<Form.Item name="tagId" label="Tags">
											{list.productTags !== undefined ?
												<Select mode="tags" options={
													tag.map((item) =>{
															return {id:item.id,value:item.id,label:item.name}

														}
													)
												}
														style={{width: '100%'}}
														placeholder="Tags"
														defaultValue={list.productTags.map((item) =>item.id)}
												/> :null
											}

										</Form.Item>
										<Form.Item name="colorId" label="Colors">
											{list.productColor !== undefined ?
												<Select mode="tags" options={
													color.map((item) =>{
															return {id:item.id,value:item.id,label:item.name}

														}
													)
												}
														style={{width: '100%'}}
														placeholder="Colors"
														defaultValue={list.productColor.map((item) =>item.id)}
												/>  :null
											}
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

export default EditProduct
