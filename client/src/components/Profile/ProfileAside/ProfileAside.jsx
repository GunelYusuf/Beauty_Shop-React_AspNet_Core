import Link from 'next/link';
import productData from 'data/product/product';
import {useState,useEffect} from "react";

import httpAgent from "../../../api/httpAgent";

export const ProfileAside = () => {

  const [allProducts,setAllProducts]=useState([])
  const [loading, setLoading] =useState(true)
  useEffect( ()=>{

    const fetchData = async () => {

      try {
        await httpAgent.Product.getAllProduct().then((response) =>{
          setAllProducts(response)

          setLoading(false)
        }).finally(() =>{
          setLoading(false)
        })

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

  },[])
  const recentlyViewed = allProducts.slice(0, 3);
  return (
    <>
      <div className='profile-aside'>
        <div className='profile-aside__subscribe'>
          <h3>Stay in touch</h3>
          <div className='box-field'>
            <input
              type='email'
              className='form-control'
              placeholder='Enter your email'
            />
          </div>
          <button type='submit' className='btn'>
            subscribe
          </button>
          <img
            src='/assets/img/subscribe-img-decor-sm.png'
            className='js-img'
            alt=''
          />
        </div>
        <div className='profile-aside__viewed'>
          <h5>You have viewed</h5>
          {recentlyViewed.map((product) => (
            <div key={product.productId} className='profile-aside__viewed-item'>
              <Link href={`/product/${product.productId}`}>
                <a className='profile-aside__viewed-item-img'>
                  <img src={product.productPhoto[0].photoUrl} className='js-img' alt='' />
                </a>
              </Link>
              <div className='profile-aside__viewed-item-info'>
                <Link href={`/product/${product.productId}`}>
                  <a className='profile-aside__viewed-item-title'>
                    {product.name}
                  </a>
                </Link>
                <span className='profile-aside__viewed-item-price'>
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          className='profile-aside__discount js-img'
          style={{ backgroundImage: `url('/assets/img/about1.png')` }}
        >
          <div className='profile-aside__discount-title'>
            Get Your
            <br />
            <span>50%</span> Off
          </div>
          <Link href='/shop'>
            <a className='btn'>
              get now!
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
