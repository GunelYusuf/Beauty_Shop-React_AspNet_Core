
import { useEffect, useState } from 'react';
import { PostComment } from './PostComment/PostComment';
import { PostContent } from './PostContent/PostContent';

export const Post = ({ currentBlog }) => {



  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if(currentBlog) setBlog(currentBlog)
    
  }, [currentBlog]);

  if (!blog) return <>Loading...</>;

  return (
    <>
      <div className='post'>
        <div className='wrapper'>
          <PostContent blog={blog} />
          {/* <PostComment blog={blog} /> */}
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
    </>
  );
};
