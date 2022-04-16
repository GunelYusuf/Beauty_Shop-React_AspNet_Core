import { Card } from './Card/Card';
import socialData from 'data/social';
import { CartContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import {useAppDispatch, useAppSelector} from "../../store/ConfigureStore";
import {fetchCurrentUser} from "../Profile/AccountSlice";
import httpAgent from "../../api/httpAgent";
import {setBasket} from "./CartSlice";



export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const socialLinks = [...socialData];

  const {basket} = useAppSelector(state => state.basket)
  const [loading,setLoading] = useState(true);
const dispatch = useAppDispatch();
  useEffect( ()=>{
      dispatch(fetchCurrentUser())
  },[dispatch])

  function getCookie(key) {
      const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
      return b ? b.pop() : "";
  }

  useEffect(()=>{
    const buyerId = getCookie('buyerId');
    if (buyerId){
      httpAgent.Basket.getBaskets()
          .then(basket => dispatch(setBasket(basket)))
          .catch(error => console.log(error))
          .finally(()=>setLoading(false))
    }else {
      setLoading(false)
    }
  },[dispatch])


 useEffect(() => {
    setCart(cart);
  }, [cart, count]);

useEffect(() => {console.log("GGG",basket)}, [basket])

  const calcTotalPrice = () => {
    let totalPrice = 0
     basket?.items.forEach((cart) => {
       totalPrice += (cart.price * cart.quantity)
     })
    return totalPrice.toFixed(2);
  }

  return (
      <>

        <div className='cart'>
          <div className='wrapper'>
            <div className='cart-table'>
              <div className='cart-table__box'>
                <div className='cart-table__row cart-table__row-head'>
                  <div className='cart-table__col'>Product</div>
                  <div className='cart-table__col'>Price</div>
                  <div className='cart-table__col'>Quantity</div>
                  <div className='cart-table__col'>Total</div>
                </div>

                { basket?.items && basket?.items.length>0? basket?.items.map((cart) => (
                    <Card
                     key={cart.id}
                        cart={cart}
                        dispatch={dispatch}
                    />
                )): <h6>salam</h6>}
              </div>
            </div>
            <div className='cart-bottom'>
              <div className='cart-bottom__promo'>
                <form className='cart-bottom__promo-form'>
                  <div className='box-field__row'>
                    <div className='box-field'>
                      <input
                          type='text'
                          className='form-control'
                          placeholder='Enter promo code'
                      />
                    </div>
                    <button type='submit' className='btn btn-grey'>
                      apply code
                    </button>
                  </div>
                </form>
                <h6>How to get a promo code?</h6>
                <p>
                  Follow our news on the website, as well as subscribe to our
                  social networks. So you will not only be able to receive
                  up-to-date codes, but also learn about new products and
                  promotional items.
                </p>
                <div className='contacts-info__social'>
                  <span>Find us here:</span>
                  <ul>
                    {socialLinks.map((social, index) => (
                        <li key={index}>
                          <a href={social.path} target='_blank'>
                            <i className={social.icon}/>
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='cart-bottom__total'>
                <div className='cart-bottom__total-goods'>
                  Goods on
                 {basket?.items && basket?.items.length >0  ?
                     <span>${calcTotalPrice()}</span>
                     : ""}
                </div>
                <div className='cart-bottom__total-promo'>
                  Discount on promo code
                  <span>No</span>
                </div>
                <div className='cart-bottom__total-num'>
                  total:
                  { basket?.items && basket?.items.length >0  ?
                      <span>${calcTotalPrice()}</span>
                  : ""}

                </div>
                <Link href='/checkout'>
                  <a className='btn'>Checkout</a>
                </Link>
              </div>
            </div>
          </div>
          <img
              className='promo-video__decor js-img'
              src='assets/img/promo-video__decor.jpg'
              alt=''
          />
        </div>

      </>
  );
};