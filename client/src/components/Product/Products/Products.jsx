import { CartContext } from 'pages/_app';
import {useContext, useEffect, useState} from 'react';
import { SingleProduct } from './SingleProduct/SingleProduct';
import axios from "axios";

export const Products = ({ products }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (id) => {
    const newProduct = products?.find((pd) => pd.id === id);
    setCart([...cart, { ...newProduct, quantity: 1 }]);
  };


  const [data,setData]=useState([])
  useEffect( ()=>{

    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:5001/api/Product");
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

  },[])
  return (
      <>
        {data.map((product) => (
            <SingleProduct
                addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
                key={product.id}
                product={product}
                onAddToWish={(id) => console.log(id)}
                onAddToCart={handleAddToCart}
            />
        ))}
      </>
  );
};