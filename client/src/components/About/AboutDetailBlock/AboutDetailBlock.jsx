import { DetailBlock } from 'components/shared/DetailBlock/DetailBlock';
import {useEffect, useState} from "react";
import axios from "axios";

export const AboutDetailBlock = () => {

 const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        const getBlocks = async () => {
            await axios.get('http://localhost:5000/api/Block').then(({data}) => {
                setBlocks(data)

            })
        }
        getBlocks()

    }, []);
  return (
    <>
        <DetailBlock blocks={blocks} />
    </>
  );
};
