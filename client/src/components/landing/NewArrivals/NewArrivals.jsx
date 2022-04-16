import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/product';
import {useEffect, useState} from "react";
import httpAgent from "../../../api/httpAgent";

export const NewArrivals = () => {
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


  const newArrival = allProducts.filter(
    (arrival) => arrival.availibility === true
  );

  return (
    <>
      {/* <!-- BEGIN NEW ARRIVALS --> */}
      <section className='arrivals'>
        <SectionTitle
          subTitle='Cosmetics'
          title='New arrivals'
          body='Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.'
        />

        <div className='products-items'>
          <ProductsCarousel products={newArrival} />
        </div>
      </section>
      {/* <!-- NEW ARRIVALS EOF --> */}
    </>
  );
};
