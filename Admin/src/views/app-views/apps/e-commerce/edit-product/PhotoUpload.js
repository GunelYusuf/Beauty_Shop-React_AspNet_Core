import React from 'react';
import {Button, Upload} from "antd";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {DeleteFilled} from "@ant-design/icons";
import './EditProduct.css';
function PhotoUpload({currentPhoto,fileList,setFileList,FileSend,setFileSend, DeletedPhotos}) {

    const removePhoto = (index,item) =>{
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        setFileSend(FileSend.filter(g => g != item))
        return setFileList(newFileList)
    }
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
            const listFiles = info.fileList.slice(currentPhoto? currentPhoto.length - -4:-4);

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
    return (
        <>
            <Upload.Dragger
                {...propsUpload}
                listType='picture-card'
                accept='.png,.jpg,.jpeg'
                maxCount={currentPhoto? 4 - currentPhoto.length : 4}
            >
                <Button>
                    Upload
                </Button>
            </Upload.Dragger>
            <ImageList sx={{ width: "100%", height: "100%" }} cols={2}>
                {currentPhoto?.map((item,index) => (
                    <ImageListItem key={index+2}>
                        <img
                            src={item.photoUrl}
                            srcSet={item.photoUrl}
                            loading="lazy"
                        />
                        <ImageListItemBar
                           actionIcon={
                               <Button
                                  onClick={() => DeletedPhotos(item.id)}
                                   type="danger"
                                   icon={<DeleteFilled />}
                               />

                           }
                        />
                    </ImageListItem>
                ))}
                {FileSend.map((item,index) => (
                    <ImageListItem key={index+3}>
                        <img
                            src={item}
                            srcSet={item}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            actionIcon={
                                <Button
                                    onClick={() => removePhoto(index,item) }
                                    type="danger"
                                    icon={<DeleteFilled />}
                                />

                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}

export default PhotoUpload;