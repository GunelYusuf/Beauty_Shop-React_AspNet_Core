import Link from 'next/link';

export const Card = ({ cart, onChangeQuantity }) => {
  const {
    name,
    image,
    id,
    isStocked,
    productNumber,
    oldPrice,
    price,
    cartQuantity,
  } = cart;

  return (
      <>
        <div className='cart-table__row'>
          <div className='cart-table__col'>
            <Link href={`/product/${id}`}>
              <a className='cart-table__img'>
                <img src={image} className='js-img' alt='' />
              </a>
            </Link>
            <div className='cart-table__info'>
              <Link href={`/product/${id}`}>
                <a className='title5'>{name}</a>
              </Link>
              {isStocked && (
                  <span className='cart-table__info-stock'>in stock</span>
              )}
              <span className='cart-table__info-num'>SKU: {productNumber}</span>
            </div>
          </div>
          <div className='cart-table__col'>
            {oldPrice ? (
                <span className='cart-table__price'>
              <span>${oldPrice}</span>${price}
            </span>
            ) : (
                <span className='cart-table__price'>${price}</span>
            )}
          </div>
          <div className='cart-table__col'>
            <div className='cart-table__quantity'>
              <div className='counter-box'>
              <span
                  onClick={() => onChangeQuantity('decrement', cartQuantity)}
                  className='counter-link counter-link__prev'
              >
                <i className='icon-arrow'/>
              </span>
                <input
                    type='text'
                    className='counter-input'
                    disabled
                    value={cartQuantity}
                />

                <span
                    onClick={() => onChangeQuantity('increment', cartQuantity)}
                    className='counter-link counter-link__next'
                >
                <i className='icon-arrow'/>
              </span>
              </div>
            </div>
          </div>
          <div className='cart-table__col'>
          <span className='cart-table__total'>
            ${(price * cartQuantity).toFixed(2)}
          </span>
          </div>
        </div>
      </>
  );
};