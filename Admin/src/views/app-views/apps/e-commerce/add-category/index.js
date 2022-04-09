import React,{ useState, useEffect } from 'react';
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import {Tabs, Form, Button, message, Row, Col, Card, Input, Upload, Checkbox} from 'antd';
import Flex from 'components/shared-components/Flex'
import axios from "axios";
import { toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from "react-router-dom";

const { TabPane } = Tabs;



const rules = {
    name: [
        {
            required: true,
            message: 'Please enter product name',
        }
    ],
    file:[
        {
            required:true,
            message:'Please enter photo'
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
const AddCategory = () => {

    let history = useHistory();
    const [form] = Form.useForm();
    const [uploadedImg, setImage] = useState('')
    const [uploadLoading, setUploadLoading] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)

    const handleUploadChange = e => {
        setImage(e.target.files[0])
        console.log(e.file[0])
    };

    const onSubmit = (e) => {
        setSubmitLoading(true)
        form.validateFields().then(values => {

            setSubmitLoading(false)

                const formData = new FormData();

                formData.append("name",form.getFieldValue("name"))
                formData.append("isFeature",form.getFieldValue("isFeature"))
                formData.append("file",e.file.file.originFileObj)

                const createCategory = async  () =>{
                    await axios.post("https://localhost:5001/api/Category",formData,{
                        headers: {'Content-Type': 'multipart/form-data'}

                    }).then(()=>{
                        toast.success(`Created ${values.name} to category list`);
                        history.push(`/app/apps/ecommerce/category-list`)
                    }).catch((err)=>{

                        console.log(err)
                        toast.error(`${err.message} `)
                    })

                }
                createCategory()


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
    >
        <PageHeaderAlt className="border-bottom" overlap>
            <div className="container">
                <Flex className="py-2" mobileFlex={false} justifyContent="between" alignItems="center">
                    <h2 className="mb-3">Add New Category</h2>
                    <div className="mb-3">
                        <Button className="mr-2">Discard</Button>
                        <Button type="primary" htmlType="submit" loading={submitLoading} >Add new Category</Button>
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

                                    <Form.Item name="name"  label="Category name"  rules={rules.name}>
                                        <Input placeholder="Category Name" />
                                    </Form.Item>

                            </Card>
                            <Card title="Media">

                                <Form.Item name='file' rules={rules.file}>
                                    <Upload.Dragger
                                        listType='picture-card'
                                        accept='.png,.jpg,.jpeg'
                                        beforeUpload={beforeUpload}
                                        action="https://localhost:3000"
                                        maxCount={1}
                                    >
                                        <Button>
                                            Upload
                                        </Button>
                                    </Upload.Dragger>
                                </Form.Item>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={7}>
                            <Card title="Organization">
                                <Form.Item valuePropName="checked" name="isFeature" initialValue={false}>
                                    <Checkbox checked>Is Feature</Checkbox>
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

export default AddCategory;
