import { Post } from 'components/Blog/Post/Post';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';
import {useEffect, useState} from "react";
import axios from "axios";
const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Post',
    path: '/post',
  },
];
const PostPage = ({id}) => {

  const [blog, setBlog] = useState("")


  useEffect(() => {
    const getBlog = async () => {
      const res = await axios(`https://localhost:5001/api/Blog/${id}`)
      setBlog(res.data)
      console.log("blog",res.data)
    }

    getBlog()

  }, [])
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Blog'>
      <Post currentBlog={blog} />
    </PublicLayout>
  );
};

export default PostPage;

export const getServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id
    }

  }
}
