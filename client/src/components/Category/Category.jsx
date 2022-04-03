import { Categories } from './Categories/Categories';
import {useEffect, useState} from "react";
import  axios,{AxiosError,AxiosResponse} from "axios";

export const Category = () => {
    
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
      <section className='all-categories'>
        <div className='top-categories__items'>
          <Categories categories={data} />
        </div>
      </section>
    </>
  );
};
