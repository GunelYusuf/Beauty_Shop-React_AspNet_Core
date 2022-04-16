

export const Card = ({ order, index, onCollapse, active }) => {


  return (
    <>
      <div className={`profile-orders__item ${active === index && 'active'}`}>
        <div className='profile-orders__row'>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>date</span>
            <span className='profile-orders__item-date'>{new Date(order.orderDate).toDateString()}</span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>Delivery address</span>

            <span className='profile-orders__item-addr'>
                {
                  order?.shippingAddress?.adress1+","+
                  order?.shippingAddress?.adress2+","+
                  order?.shippingAddress?.country+","+
                  order?.shippingAddress?.city
                }

            </span>

          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>amount</span>
            <span className='profile-orders__item-price'>${order.total}</span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>Status</span>
            <span
              className={`profile-orders__col-${
                order.orderStatus==='Panding' ? 'Panding' : 'onway'
              }`}
            >
            </span>
            <span
              onClick={() => onCollapse(index)}
              className='profile-orders__col-btn'
            />
          </div>
        </div>
        <div className='profile-orders__content'>
          <ul>
            {order.orderItems.map((item, index) => (
              <li key={index}>
                {item.name}
                <span>${item.price}</span>
              </li>
            ))}
            <li>
              Payment Methods:
              <span>Сredit card: **** **** **** 1633</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
