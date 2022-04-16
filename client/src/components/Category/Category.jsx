import { Categories } from './Categories/Categories';
import {useEffect, useState} from "react";
import  axios,{AxiosError,AxiosResponse} from "axios";
import httpAgent from "../../api/httpAgent";

export const Category = () => {
    
    const [data,setData]=useState([])
    const [loading, setLoading] =useState(true)
    useEffect( ()=>{
        
        const fetchData = async () => {
            try {
                await httpAgent.Category.getAllCategory().then((response) =>{
                    setData(response)

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
    if(!data) return <h2>Loading...</h2>

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
