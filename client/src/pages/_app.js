import { createContext, useState, useEffect } from 'react';
import '/src/styles/styles.scss';
import {store, useAppDispatch} from "../store/ConfigureStore"
import {Provider} from "react-redux";
import {fetchCurrentUser} from "../components/Profile/AccountSlice";
import httpAgent from "../api/httpAgent";
import {setBasket} from "../components/Cart/CartSlice";
import {createStore} from "@reduxjs/toolkit";
export const CartContext = createContext();

const MyApp = ({ Component, pageProps }) => {

const [cart, setCart] = useState([]);

    useEffect(() => {
       if(localStorage.getItem("cartItems") && localStorage.getItem("cartitems") !== ""){

               setCart(JSON.parse(localStorage.getItem("cartItems")))


       }
    }, [])

    useEffect(() => {
        if(cart?.length > 0)
        localStorage.setItem("cartItems", JSON.stringify(cart))
    }, [cart])


    return (
        <Provider store={store}>
        <CartContext.Provider  value={{ cart, setCart }}>

                <Component {...pageProps} />

        </CartContext.Provider>
</Provider>

    );
};

export default MyApp;