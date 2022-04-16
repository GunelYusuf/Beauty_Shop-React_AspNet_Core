import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import {Tabs, Form, Button, message, Col, Card, Input, Upload, Checkbox, Row, Modal, Select} from 'antd';
import {useHistory, useParams} from 'react-router-dom';
import Flex from 'components/shared-components/Flex'
import axios from "axios";
import { toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {LoadingOutlined} from "@ant-design/icons";
import CustomIcon from "../../../../../components/util-components/CustomIcon";
import {ImageSvg} from "../../../../../assets/svg/icon";

const { TabPane } = Tabs;
const { Option } = Select;


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

const EditBlog = () => {

    const param = useParams()

    let history = useHistory();
    const [form] = Form.useForm();
    const [uploadLoading, setUploadLoading] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const [list,setList]=useState([])
    const [data,setData]=useState([])
    const [tag,setTag]=useState([])

    useEffect( ()=>{

        const fetchTag = async () => {
            try {
                const response = await axios.get("https://localhost:5001/api/Blog/GetAllTags");
                setTag(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTag()

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
    console.log(data)


    useEffect(() => {

            const fetchData = async (id) =>
            await axios.get(`https://localhost:5001/api/Blog/${id}`).then((response)=> {
                setList(response.data)
                form.setFieldsValue({
                    tagId: response.data.blogTags.map(item => item && item.id),
                    title:response.data.title,
                    description:response.data.description,
                    categoryId:response.data.categoryId,
                    file: response.data.imageUrl
                })

            });
       if(param.id)
        fetchData(param.id)

    }, []);


    const handleUploadChange = e => {
        console.log(e.fileList)
        setList({...list,imageUrl:window.URL.createObjectURL(e.file.originFileObj)})
        console.log(window.URL.createObjectURL(e.file.originFileObj))

    };



    const onSubmit = (e) => {
        setSubmitLoading(true)

        form.validateFields().then(values => {
            console.log("values",values)
            setSubmitLoading(false)
            const formData = new FormData();
            formData.append("id",form.getFieldValue("id"))
            formData.append("title",form.getFieldValue("title"))
            formData.append("description",form.getFieldValue('description'))
            formData.append("categoryId",form.getFieldValue('categoryId'))
            const newtagIdList = form.getFieldValue('tagId')

            for (const i in newtagIdList) {
                formData.append('tagId', newtagIdList[i])
            }
            formData.append("file",e.file.file.originFileObj)

            const updateBlog = async () =>{
                await axios.put(`https://localhost:5001/api/Blog/`,formData,{
                    headers: {'Content-Type': 'multipart/form-data'}

                }).then(()=>{
                    toast.success(`Saved ${values.title} to blog list`);
                    history.push(`/app/apps/ecommerce/blog-list`)
                }).catch((err)=>{

                    console.log(err)
                    toast.error(`${err.message} `)
                })

            }
            message.success(`Blog saved`);
            updateBlog()


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
                            <h2 className="mb-3">Edit Blog </h2>
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
                                        {list.title!==undefined?
                                            <Form.Item name="title" label="Blog title" initialValue={list.title} >
                                                <Input  style={{width: "400px"}} placeholder="Blog Title" onChange={(e) =>{setList({...list,title:e.target.value})}} />
                                            </Form.Item>: null
                                        }
                                        {list.description!==undefined?
                                            <Form.Item name="description" initialValue={list.description} label="Description">
                                                <Input.TextArea rows={4} onChange={(e) =>{setList({...list,description:e.target.value})}} />
                                            </Form.Item>: null
                                        }
                                    </Card>
                                    <Card title="Media">
                                        <Form.Item name='file'>
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
                                            {list.blogTags !== undefined ?
                                                <Select mode="tags" options={
                                                    tag.map((item) =>{
                                                            return {id:item.id,value:item.id,label:item.name}

                                                        }
                                                    )
                                                }
                                                        style={{width: '100%'}}
                                                        placeholder="Tags"
                                                        defaultValue={list.blogTags.map((item) =>item && item.id)}
                                                /> :null
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

export default EditBlog