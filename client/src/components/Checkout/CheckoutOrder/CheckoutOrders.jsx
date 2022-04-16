import { Card } from './Card/Card';
import {useAppDispatch, useAppSelector} from "../../../store/ConfigureStore";
import {useEffect, useState} from "react";
import {fetchCurrentUser} from "../../Profile/AccountSlice";
import httpAgent from "../../../api/httpAgent";
import {setBasket} from "../../Cart/CartSlice";

export const CheckoutOrders = () => {

  const {basket} = useAppSelector(state => state.basket);
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
  const subtotal = basket?.items?.reduce((sum,item)=>sum + (item.quantity * item.price),0) ?? 0;
  return (
    <>
      <div className='checkout-order'>
        <h5>Your Order</h5>
        {basket?.items?.map((order) => (
          <Card key={order.id} order={order} />
        ))}
      </div>
      <div className='cart-bottom__total'>
        <div className='cart-bottom__total-goods'>
          Goods on
          <span>${subtotal}</span>
        </div>
        <div className='cart-bottom__total-promo'>
          Discount on promo code
          <span>No</span>
        </div>
        <div className='cart-bottom__total-delivery'>
          Delivery{' '}
          <span className='cart-bottom__total-delivery-date'>
            (Aug 28,2020 at 11:30)
          </span>
          <span>$30</span>
        </div>
        <div className='cart-bottom__total-num'>
          total:
          {subtotal+30}
        </div>
      </div>
    </>
  );
};
