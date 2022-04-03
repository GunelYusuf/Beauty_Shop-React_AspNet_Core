import { Categories } from 'components/Category/Categories/Categories';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import {useEffect, useState} from "react";
import axios from "axios";

export const TopCategories = () => {
    const [data,setData]=useState([])
    useEffect( ()=>{

        const fetchData = async () => {
            try {
                const response = await axios.get("https://localhost:5001/api/Category");
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

    },[])
  return (
    <>
        <section className='top-categories'>
        <SectionTitle
          subTitle='Popular collections'
          title='top categories'
          body='Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.'
        />
        <div className='top-categories__items'>
          {<Categories categories={data.slice(0,3)} />}
        </div>
      </section>

    </>
  );
};
