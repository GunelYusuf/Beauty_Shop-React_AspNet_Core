import Link from 'next/link';

export const Card = ({ blog }) => {
  const { title, id, imageUrl, description, created } = blog;

  return (
    <div className='blog-item'>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__img'>
          <img src={imageUrl} className='js-img' alt='' />
          <span className='blog-item__date'>
            <span>{new Date(created).toDateString().split(" ")[1]}</span> {new Date(created).toDateString().split(" ")[2]}
          </span>
        </a>
      </Link>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__title'>{title}</a>
      </Link>
      <p>{description}</p>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__link'>
          Read more <i className='icon-arrow-md'/>
        </a>
      </Link>
    </div>
  );
};
