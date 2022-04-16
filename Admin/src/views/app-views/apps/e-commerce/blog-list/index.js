import React, {useEffect, useState} from 'react'
import { Card, Table, Input, Button, Badge, Menu,Tag } from 'antd';
import { EyeOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'
import { useHistory } from "react-router-dom";
import utils from 'utils'
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const BlogList = () => {
    let history = useHistory();

    const [list,setList]=useState([])
    const [tag,setTag]=useState([])

    useEffect(() => {console.log(tag)}, [tag])


    useEffect( ()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        try {
            const response = await axios.get("https://localhost:5001/api/Blog");
            setList(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(list)


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
    console.log(tag)


    const deleteRow = async (id) => {
        try {
            await axios.delete(`https://localhost:5001/api/Blog/${id}`).then(() =>{
                    toast.success("Blog has been deleted successfully")
                    fetchData()
                }
            )
        } catch (error) {
            toast.error("The Error occurred")
        }
    }

    const [selectedRows, setSelectedRows] = useState([])
    const [selectedRowKeys, setSelectedRowKeys] = useState([])

    const dropdownMenu = row => (
        <Menu>
            <Menu.Item onClick={() => viewDetails(row)}>
                <Flex alignItems="center">
                    <EyeOutlined />
                    <span className="ml-2">View Details</span>
                </Flex>
            </Menu.Item>
            <Menu.Item onClick={() => deleteRow(row.id)}>
                <Flex alignItems="center">
                    <DeleteOutlined />
                    <span className="ml-2">{selectedRows.length > 0 ? `Delete (${selectedRows.length})` : 'Delete'}</span>
                </Flex>
            </Menu.Item>
        </Menu>
    );

    const addBlog = () => {
        history.push(`/app/apps/ecommerce/add-blog`)
    }

    const viewDetails = row => {
        history.push(`/app/apps/ecommerce/edit-blog/${row.id}`)
    }



    const tableColumns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: 130
        },
        {
            title: 'Blog',
            dataIndex: 'title',
            render: (_, record) => (
                <div className="d-flex">
                    <AvatarStatus size={60} type="square" src={record.imageUrl} name={record.title}/>
                </div>
            ),
            sorter: (a, b) => utils.antdTableSorter(a, b, 'title')
        },
        {
            title: 'Category',
            dataIndex: 'categoryName',
            sorter: (a, b) => utils.antdTableSorter(a, b, 'categoryName')
        },

        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <EllipsisDropdown menu={dropdownMenu(elm)}/>
                </div>
            )
        }
    ];

    const rowSelection = {
        onChange: (key, rows) => {
            setSelectedRows(rows)
            setSelectedRowKeys(key)
        }
    };

    const onSearch = e => {
        const value = e.currentTarget.value
        const searchArray = e.currentTarget.value? list : list
        const data = utils.wildCardSearch(searchArray, value)
        setList(data)
        setSelectedRowKeys([])
    }

    return (
        <>
            <ToastContainer/>
            <Card>
                <Flex alignItems="center" justifyContent="between" mobileFlex={false}>
                    <Flex className="mb-1" mobileFlex={false}>
                        <div className="mr-md-3 mb-3">
                            <Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
                        </div>

                    </Flex>
                    <div>
                        <Button onClick={addBlog} type="primary" icon={<PlusCircleOutlined />} block>Add Blog</Button>
                    </div>
                </Flex>
                <div className="table-responsive">
                    <Table
                        columns={tableColumns}
                        dataSource={list}
                        rowKey='id'
                        rowSelection={{
                            selectedRowKeys: selectedRowKeys,
                            type: 'checkbox',
                            preserveSelectedRowKeys: false,
                            ...rowSelection,
                        }}
                    />
                </div>
            </Card>
        </>

    )
}

export default BlogList;