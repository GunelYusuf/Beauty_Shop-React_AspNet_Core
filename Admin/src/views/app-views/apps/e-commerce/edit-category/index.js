import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import {Tabs, Form, Button, message, Col, Card, Input, Upload, Checkbox, Row, Modal} from 'antd';
import {useHistory, useParams} from 'react-router-dom';
import Flex from 'components/shared-components/Flex'
import axios from "axios";
import { toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {LoadingOutlined} from "@ant-design/icons";
import CustomIcon from "../../../../../components/util-components/CustomIcon";
import {ImageSvg} from "../../../../../assets/svg/icon";


const { TabPane } = Tabs;



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

const imageUploadProps = {
    name: 'file',
    multiple: true,
    listType: "picture-card",
    showUploadList: false,
    action:"https://localhost:3000"
}

const EditCategory = () => {

    const param = useParams()

    let history = useHistory();
    const [form] = Form.useForm();
    const [uploadLoading, setUploadLoading] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const [list,setList]=useState([])

    const fetchData = async (id) => {
        try {
            const response = await axios.get(`https://localhost:5001/api/Category/${id}`);
            setList(response.data)
            form.setFieldsValue({file:response.data.imageUrl,
                                       isFeature:response.data.isFeature}
            )

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {


       fetchData(param.id)

    }, [form]);


    const handleUploadChange = e => {
        console.log(e.fileList)
        setList({...list,imageUrl:window.URL.createObjectURL(e.file.originFileObj)})
        console.log(window.URL.createObjectURL(e.file.originFileObj))

    };



    const onSubmit = (e) => {
        console.log(e)
        console.log(list)
        setSubmitLoading(true)
        form.validateFields().then(values => {

            setSubmitLoading(false)
            const formData = new FormData();
            formData.append("id",form.getFieldValue("id"))
            formData.append("name",form.getFieldValue("name"))
            formData.append("isFeature",form.getFieldValue('isFeature'))
            formData.append("file",e.file.file.originFileObj)

                     const updateCategory = async () =>{
                        await axios.put(`https://localhost:5001/api/Category/${param.id}`,formData,{
                            headers: {'Content-Type': 'multipart/form-data'}

                        }).then(()=>{
                            toast.success(`Saved ${values.name} to category list`);
                        }).catch((err)=>{

                            console.log(err)
                            toast.error(`${err.message} `)
                        })

                    }
                 updateCategory()
                    message.success(`Category saved`);

        }).catch(info => {
            setSubmitLoading(false)
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
                list={list}
            >
                <PageHeaderAlt className="border-bottom" overlap>
                    <div className="container">
                        <Flex className="py-2" mobileFlex={false} justifyContent="between" alignItems="center">
                            <h2 className="mb-3">Edit Category </h2>
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
                                            <Form.Item name="name" label="Category name" initialValue={list.name} >
                                                <Input  style={{width: "400px"}} placeholder="Category Name" onChange={(e) =>{setList({...list,name:e.target.value})}} />
                                            </Form.Item>: null
                                        }
                                    </Card>
                                    <Card title="Media">
                                     <Form.Item name='file' initialValue={list.imageUrl}>
                                         <Upload.Dragger {...imageUploadProps}  beforeUpload={beforeUpload}
                                                  onChange={e => handleUploadChange(e)}>
                                             {
                                                 list.imageUrl ?
                                                         <img src={list.imageUrl}  alt="avatar" className="img-fluid" />
                                                     :
                                                     <div>
                                                         {
                                                             uploadLoading ?
                                                                 <div>
                                                                     <LoadingOutlined className="font-size-xxl text-primary"/>
                                                                     <div className="mt-3">Uploading</div>
                                                                 </div>
                                                                 :
                                                                 <div>
                                                                     <CustomIcon className="display-3" svg={ImageSvg}/>
                                                                     <p>Click or drag file to upload</p>
                                                                 </div>
                                                         }
                                                     </div>
                                             }
                                         </Upload.Dragger>
                                     </Form.Item>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={24} md={7}>
                                    <Card title="Organization">
                                        <Form.Item valuePropName="checked" name="isFeature" initialValue={list.isFeature} >
                                            <Checkbox onChange={(e) =>{setList({...list,isFeature:e.target.checked})}} checked={list.isFeature}>Is Feature</Checkbox>
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

export default EditCategory