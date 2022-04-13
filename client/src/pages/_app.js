import { createContext, useState, useEffect } from 'react';
import '/src/styles/styles.scss';

export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
       if(localStorage.getItem("cartItems")){
           setCart(JSON.parse(localStorage.getItem("cartItems")))
       }
    }, [])

    useEffect(() => {
        localStorage.setItem("cartItems", cart)
    }, [cart])


    return (
        <CartContext.Provider value={{ cart, setCart }}>
            <Component {...pageProps} />
        </CartContext.Provider>
    );
};

export default MyApp;