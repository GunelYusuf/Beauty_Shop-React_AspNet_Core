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
                {data.map((product) => (
                    <SingleProduct
                        addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
                        key={product.id}
                        product={product}
                        onAddToWish={(id) => console.log(id)}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </Slider>
        </>
    );
};