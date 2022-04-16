import { CartContext } from 'pages/_app';
import {useContext, useEffect, useState} from 'react';
import axios from "axios";
import httpAgent from "../../../api/httpAgent";
import {useAppDispatch} from "../../../store/ConfigureStore";
import {addBasketItemAsync} from "../../Cart/CartSlice";
import {SingleProduct} from "./SingleProduct/SingleProduct.jsx";

export const Products = ({ products }) => {

  const dispatch = useAppDispatch();


  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    dispatch(addBasketItemAsync({productId:product.id}))
    let newCart = [...cart, { ...product, cartQuantity: 1, uid: generateNumber() }]
    setCart(newCart);
  };

  const generateNumber = () => {
    let randomNum = "";
    for(let i =0; i < 16;i++) randomNum += Math.floor(Math.random() *10)
    return randomNum;
  }

  return (
      <>
        {products.map((product) => (
            <SingleProduct
                addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
                key={product.id}
                product={product}
                onAddToWish={(id) => console.log(id)}
                onAddToCart={() => handleAddToCart(product)}
            />
        ))}
      </>
  );
};