import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import Cookies from 'universal-cookie';
import axios from "axios"
import {toast,ToastContainer} from  'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const ReviewFrom = ({prodId}) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("")
  const cookies = new Cookies();
  const handleRating = (rate) => {
    setRating(rate);
  console.log(rate)
  };

  const handlerSubmit = async (e) => {
    e.preventDefault()
    console.log(rating)
    console.log(prodId)

    await axios.post('http://localhost:5000/api/Comment', {
      rating: rating,
      message: review,
      productId: prodId
    }).then(toast.success(' Your Comment adding successfully '))
  }

  return (
    <>
<ToastContainer/>
      <div className='product-detail__form post-comment__form'>
        <div className='subscribe-form__img'>
          <img src='/assets/img/subscribe-img.png' />
        </div>
        <form onSubmit = {handlerSubmit}>
          <h4>leave a review</h4>
          <p>Your email address will not be published.</p>
          <div className='rating' data-id='rating_1'>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              fillColor='#cfc819'
              size='20px'
              emptyColor='#fff'
            />
          </div>
          <div className='box-field box-field__textarea'>
            <textarea
              className='form-control'
              placeholder='Enter your review'
              value = {review}
              onChange = {(e) => setReview(e.target.value)}
           />
          </div>
          <button type='submit' className='btn'>
            send
          </button>
        </form>
      </div>
    </>
  );
};
