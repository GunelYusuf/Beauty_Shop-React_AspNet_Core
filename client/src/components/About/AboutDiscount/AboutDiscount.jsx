import Link from 'next/link';
import {useEffect, useState} from "react";
import axios from "axios";

export const AboutDiscount = () => {

  const [abouts, setAbouts] = useState(null);

  useEffect(() => {
    const getAbout = async () => {
      await axios.get('http://localhost:5000/api/About').then(({data}) => {
        setAbouts(data)
        console.log("data", data)
      })
    }
    getAbout()

  }, []);
  return (
    <>
      {!!abouts && abouts.map((about, index) => (
      <div
        className='discount discount-about js-img'
        style={{ backgroundImage: `url('/assets/img/about1.png')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>Success story</span>
            <h2>{about.title}</h2>
            <p>
              {about.subtitle}
            </p>
            <p className='discount-info__sm'>
              {about.description}
            </p>
            <Link href='/shop'>
              <a className='btn'>Shop now</a>
            </Link>
          </div>
        </div>
      </div>
          ))}
    </>
  );
};
