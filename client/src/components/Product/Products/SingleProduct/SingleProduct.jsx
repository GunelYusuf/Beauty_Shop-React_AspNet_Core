import Link from 'next/link';
import { useEffect, useState }  from 'react'
import axios from 'axios'

export const SingleProduct = ({
                                product,
                                onAddToWish,
                                onAddToCart,
                                addedInCart,
                              }) => {
  const { name, price, productPhoto,id, campaignId } = product;
  const [allCampaign, setAllCampaign] = useState("")


  useEffect(() => {

    const getCampaign = async () => {
      await axios('https://localhost:5001/api/Product/GetAllCampaigns').then(res => setAllCampaign(res.data))
    }
    getCampaign()
  }, [])


  return (
      <>

        <div className='products-item'>
          <div className='products-item__type'>
           {campaignId && <span className='products-item__sale'>sale</span>}
           {!campaignId && <span className='products-item__new'>new</span>}
          </div>
          <div className='products-item__img'>
            {productPhoto && <img src={productPhoto[0].photoUrl} className='js-img' alt='' /> }
            <div className='products-item__hover'>
              <Link href = "/product/[id]" as={`/product/${id}`}>
                <a>
                  <i className='icon-search'/>
                </a>
              </Link>
              <div className='products-item__hover-options'>
                <button className='addList' onClick={() => onAddToWish(id)}>
                  <i className='icon-heart'/>
                </button>
                <button
                    disabled={addedInCart}
                    className={`addList ${addedInCart ? 'added' : ''}`}
                    onClick={() => onAddToCart()}
                >
                  <i className='icon-cart'/>
                </button>
              </div>
            </div>
          </div>
          <div className='products-item__info'>
            <Link href={`/product/${id}`}>
              <a>
                <span className='products-item__name'>{name}</span>
              </a>
            </Link>
            <span className='products-item__cost'>
              {
                campaignId ? allCampaign ? <> <span>
                  ${
                  price
                }
                </span> {"$" + (allCampaign.find(item => item.id === campaignId).discount * price / 100).toFixed(2)} </> : price : price
              }

          </span>
          </div>
        </div>

      </>
  );
};