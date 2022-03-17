import { Card } from './Card/Card';

export const Blogs = ({ blogs }) => {
  return (
    <>
        <div className='blog-items'>
        {blogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};
