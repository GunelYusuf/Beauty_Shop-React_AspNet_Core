import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { ProductDetails } from 'components/Product/ProductDetails/ProductDetails';
import axios from 'axios'
//const { PublicLayout } = require('layout/PublicLayout');
import { useEffect, useState } from 'react'
import { Layout } from "layout/Layout"

// PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Shop'

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Shop',
    path: '/shop',
  },
  {
    label: 'Product',
    path: '/product',
  },
];
const SingleProductPage = ({id}) => {



  const [product, setProduct] = useState("")
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios(`https://localhost:5001/api/Product/${id}`)
      setProduct(res.data)
    }

    getProduct()

  }, [])

  useEffect(() => {
    if(product){
      console.log(product)
    }
  }, [product])


  return (
    <Layout>
      <ProductDetails currentProduct = {product} />
    </Layout>
  );
};

export default SingleProductPage;

export const getServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id
    }
  }
}


