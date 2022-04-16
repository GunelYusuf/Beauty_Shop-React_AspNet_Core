import productData from 'data/product/product';
import { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import socialData from 'data/social';
import { Reviews } from '../Reviews/Reviews';
import { ReviewFrom } from '../ReviewForm/ReviewFrom';
import { useRouter } from 'next/router';
import { CartContext } from 'pages/_app';
import axios from "axios";
export const ProductDetails = ({currentProduct}) => {
  const router = useRouter();
  const socialLinks = [...socialData];
  const products = [...productData];
  const [product, setProduct] = useState(null);
  const [addedInCart, setAddedInCart] = useState(false);


  useEffect(() => {setProduct(currentProduct)}, [currentProduct])


  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(2);
  const [activeColor, setActiveColor] = useState(2);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const { cart, setCart } = useContext(CartContext);


  const handleAddToCart = () => {
    let newCart = [...cart, { ...currentProduct, cartQuantity: quantity, uid: generateNumber() }]
    setCart(newCart);
  };

  const generateNumber = () => {
    let randomNum = "";
    for(let i =0; i < 16;i++) randomNum += Math.floor(Math.random() *10)
    return randomNum;
  }


  const [allCampaign, setAllCampaign] = useState("")


  useEffect(() => {

    const getCampaign = async () => {
      await axios('https://localhost:5001/api/Product/GetAllCampaigns').then(res => setAllCampaign(res.data))
    }
    getCampaign()
  }, [])

  if (!product) return <>Loading....</>;
  return (
    <>

      <div className='product'>
        <div className='wrapper'>
          <div className='product-content'>

            <div className='product-slider'>
              <div className='product-slider__main'>
                <Slider
                  fade={true}
                  asNavFor={nav2}
                  arrows={false}
                  lazyLoad={true}
                  ref={(slider1) => setNav1(slider1)}
                >
                  {product.productPhoto.map((item) => (
                    <div key={item.id} className='product-slider__main-item'>
                      <div className='products-item__type'>
                        {product.campaignId ? (
                          <span className='products-item__sale'>sale</span> ) :
                           (
                          <span className='products-item__new'>new</span>
                        )}
                      </div>
                      <img src={item.photoUrl} alt='product' />
                    </div>
                  ))}
                </Slider>
              </div>


              <div className='product-slider__nav'>
                <Slider
                  arrows={false}
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  {product.productPhoto.map((item) => (
                    <div key={item.id} className='product-slider__nav-item'>
                      <img src={item.photoUrl} alt='product' />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className='product-info'>
              <h3>{product.name}</h3>
              {product.availibility ? (
                <span className='product-stock'>in stock</span>
              ) : (
                ''
              )}

              <span className='product-num'>SKU: {product.productCode}</span>

                <span className='product-price'>${product.price}</span>

              <p>{product.description}</p>


              <div className='contacts-info__social'>
                <span>Find us here:</span>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.path}>
                        <i className={social.icon ? social.icon : ''}/>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>


              <div className='product-options'>
                <div className='product-info__color'>
                  <span>Color:</span>
                  <ul>
                    {product?.productColor.map((color) => (
                      <li
                        onClick={() => setActiveColor(color.id)}
                        className={activeColor === color.id ? 'active' : ''}
                        key={color.id}
                        style={{ backgroundColor: color.name }}
                      />
                    ))}
                  </ul>
                </div>


                <div className='product-info__quantity'>
                  <span className='product-info__quantity-title'>
                    Quantity:
                  </span>
                  <div className='counter-box'>
                    <span
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className='counter-link counter-link__prev'
                    >
                      <i className='icon-arrow'/>
                    </span>
                    <input
                      type='text'
                      className='counter-input'
                      disabled
                      value={quantity}
                    />
                    <span
                      onClick={() => setQuantity(quantity + 1)}
                      className='counter-link counter-link__next'
                    >
                      <i className='icon-arrow'/>
                    </span>
                  </div>
                </div>
              </div>
              <div className='product-buttons'>
                <button
                  disabled={addedInCart}
                  onClick={() => handleAddToCart()}
                  className='btn btn-icon'
                >
                  <i className='icon-cart'/> cart
                </button>
                <button className='btn btn-grey btn-icon'>
                  <i className='icon-heart'/> wish
                </button>
              </div>
            </div>
          </div>


          <div className='product-detail'>
            <div className='tab-wrap product-detail-tabs'>
              <ul className='nav-tab-list tabs pd-tab'>
                <li
                  className={tab === 1 ? 'active' : ''}
                  onClick={() => setTab(1)}
                >
                  Description
                </li>
                <li
                  className={tab === 2 ? 'active' : ''}
                  onClick={() => setTab(2)}
                >
                  Reviews
                </li>
              </ul>
              <div className='box-tab-cont'>

                {tab === 1 && (
                  <div className='tab-cont'>
                    <p>{product.description}</p>
                  </div>
                )}

                {tab === 2 && (
                 <div className='tab-cont product-reviews'>
          <Reviews prodId = {product.id} />
          <ReviewFrom prodId = {product.id} /></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>

    </>
  );
};
