import { Card } from './Card/Card';
import axios from 'axios'
import { useState, useEffect } from 'react'

export const Reviews = ({prodId}) => {
    const [reviews, setReviews] = useState("")

    useEffect(() => {
        getReviews();
    }, [])


    const getReviews = async () => {
        await axios.get('http://localhost:5000/api/Comment').then(({data}) => setReviews(data))
    }

console.log(reviews)


  return (
    <>
        <div className='product-detail__items'>
        {reviews && reviews?.filter(item => item.productId === prodId).map((review, index) => (
          <Card key={index} review={review} />
        ))}
        <a href='#' className='blog-item__link'>
          show more <i className='icon-arrow-md'/>
        </a>
      </div>

    </>
  );
};
