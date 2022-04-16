import React,{ useState } from 'react';
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import {Tabs, Form, Button, message, Row, Col, Card, Input, Upload, Select} from 'antd';
import Flex from 'components/shared-components/Flex'
import axios from "axios";
import { toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from "react-router-dom";


const { TabPane } = Tabs;


const rules = {
    title:[
        {
            required: true,
            message: 'Please enter block title',
        }
    ],
    file:[
        {
            required:true,
            message:'Please enter photo'
        }
    ],
    step: [
        {
            required: true,
            message: 'Please enter blog step',
        }
    ],


}

const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/svg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

const AddBlock = () => {

    let history = useHistory();
    const [form] = Form.useForm();
    const [data,setData]=useState([])

    const [submitLoading, setSubmitLoading] = useState(false)

    const onSubmit = (e) => {
        setSubmitLoading(true)
        form.validateFields().then(values => {

            setSubmitLoading(false)

            const formData = new FormData();

            formData.append("title",form.getFieldValue("title"))
            formData.append("step",form.getFieldValue("step"))
            formData.append("file",e.file.file.originFileObj)

            const createCategory = async  () =>{
                await axios.post("https://localhost:5001/api/Block",formData,{
                    headers: {'Content-Type': 'multipart/form-data'}

                }).then(()=>{
                    toast.success(`Created ${values.name} to block list`);
                    history.push(`/app/apps/ecommerce/block-list`)
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
                            <h2 className="mb-3">Add New Blog</h2>
                            <div className="mb-3">
                                <Button className="mr-2">Discard</Button>
                                <Button type="primary" htmlType="submit" loading={submitLoading} >Add new Block</Button>
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
                                        <Form.Item name="title"  label="Block title"  rules={rules.title}>
                                            <Input placeholder="Block title" />
                                        </Form.Item>
                                        <Form.Item name="step" label="Description" rules={rules.step}>
                                            <Input.TextArea rows={4}/>
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

                            </Row>

                        </TabPane>
                    </Tabs>
                </div>
            </Form>
        </>
    )
}

export default AddBlock;