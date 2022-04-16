import Link from 'next/link';
import axios from "axios";
import {useEffect, useState} from "react";
import {addBasketItemAsync, removeBasketItemAsync} from "../CartSlice";



export const Card = ({ cart,dispatch}) => {

  const [allCampaign, setAllCampaign] = useState("")


  useEffect(() => {

    const getCampaign = async () => {
      await axios('https://localhost:5001/api/Product/GetAllCampaigns').then(res => setAllCampaign(res.data))
    }
    getCampaign()
  }, [])

  return (
      <>
        <div className='cart-table__row' style = {{position: "relative"}}>
          <div className='cart-table__col'>
            <Link href={`/product/${cart.id}`}>
              <a className='cart-table__img'>
                <img src={cart.imageUrl} className='js-img' alt='' />
              </a>
            </Link>
            <div className='cart-table__info'>
              <Link href={`/product/${cart.id}`}>
                <a className='title5'>{cart.name}</a>
              </Link>

              <span className='cart-table__info-stock'>in stock</span>

              <span className='cart-table__info-num'>SKU: 1203</span>
            </div>
          </div>
          <div className='cart-table__col'>
            {/*{allCampaign ? (*/}
            {/*    <span className='cart-table__price'>*/}
            {/*      <span>${cart.price}</span>${ (allCampaign.find(item => item.id === campaignId).discount * cart.price / 100).toFixed(2)  }*/}
            {/*    </span>*/}
            {/*) : (*/}
                <span>${cart.price}</span>
            {/*)}*/}
          </div>
          <div className='cart-table__col'>
            <div className='cart-table__quantity'>
              <div className='counter-box'>
              <span
                  onClick={() => dispatch(removeBasketItemAsync(
                      {productId:cart.productId,quantity:1}))}
                  className='counter-link counter-link__prev'
              >
                <i className='icon-arrow'/>
              </span>
                <input
                    type='text'
                    className='counter-input'
                    disabled
                    value={cart.quantity}
                />

                <span
                    onClick={() => dispatch(addBasketItemAsync(
                        {productId:cart.productId}
                    ))}
                    className='counter-link counter-link__next'
                >
                <i className='icon-arrow'/>
              </span>
              </div>
            </div>
          </div>
          <div className='cart-table__col'>
          <span className='cart-table__total'>
            ${(cart.price * cart.quantity).toFixed(2)}
          </span>
            <span onClick = { ()=> dispatch(removeBasketItemAsync({productId:cart.productId,quantity:cart.quantity})) } style = {{position: "absolute", top: "48%",transform: "translateY(-50%)",right: "32px", color: "red", fontSize: "20px", cursor: "pointer"}}>x</span>
          </div>
        </div>
      </>
  );
};