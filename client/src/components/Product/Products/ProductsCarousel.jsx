import {
    SlickArrowPrev,
    SlickArrowNext,
} from 'components/utils/SlickArrows/SlickArrows';
import { CartContext } from 'pages/_app';
import {useContext, useEffect, useState} from 'react';
import Slider from 'react-slick';
import { SingleProduct } from './SingleProduct/SingleProduct';
import axios from "axios";

export const ProductsCarousel = ({ products }) => {
    const { cart, setCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        let newCart = [...cart, { ...product, cartQuantity: 1, uid: generateNumber() }]
        setCart(newCart);
    };

    const generateNumber = () => {
        let randomNum = "";
        for(let i =0; i < 16;i++) randomNum += Math.floor(Math.random() *10)
        return randomNum;
    }
    const [data,setData]=useState([])

    useEffect(() => {
        setData(products)
    }, [products])


    const settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <SlickArrowPrev />,
        nextArrow: <SlickArrowNext />,
        lazyLoad: 'progressive',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Slider {...settings}>
                {data.length > 0 && data.map((product) => (
                    <SingleProduct
                        addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
                        key={product.id}
                        product={product}
                        onAddToWish={(id) => console.log(id)}
                        onAddToCart={() => handleAddToCart(product)}
                    />
                ))}
            </Slider>
        </>
    );
};