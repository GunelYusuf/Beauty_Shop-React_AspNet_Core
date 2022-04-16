import Link from 'next/link';

export const Card = ({ order }) => {

  return (
    <>
      <div className='checkout-order__item'>
        <Link href={`/product/${order.productId}`}>
          <a className='checkout-order__item-img'>
            <img src={order.imageUrl} className='js-img' alt='' />
          </a>
        </Link>
        <div className='checkout-order__item-info'>
          <Link href={`/product/${order.productId}`}>
            <a className='title6'>
              {order.name} <span>x{order.quantity}</span>
            </a>
          </Link>
          <span className='checkout-order__item-price'>
           ${(order.price * order.quantity).toFixed(2)}
          </span>
          <span className='checkout-order__item-num'>SKU: 'IN1203'</span>
        </div>
      </div>
    </>
  );
};
