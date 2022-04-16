import { Blogs } from './Blogs/Blogs';
import blogData from 'data/blog/blog';
import { usePagination } from 'components/utils/Pagination/Pagination';
import { PagingList } from 'components/shared/PagingList/PagingList';
import {useEffect, useState} from "react";
import axios from 'axios';

export const Blog = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
  const getBlogs = async () => {
    await axios.get('http://localhost:5000/api/Blog').then(({data}) => {
      setBlogs(data)
      console.log("data", data)
    })
  }
getBlogs()

  }, []);

  const paginate = usePagination(blogs || blogData, 4);
  return (
    <>
      <div className='blog'>
        <div className='wrapper'>
          <Blogs blogs={paginate?.currentData()} />
        </div>
        <PagingList paginate={paginate} />
      </div>
    </>
  );
};
