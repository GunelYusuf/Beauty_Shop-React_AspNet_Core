import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { useState } from 'react';
import Link from 'next/link';
import {useEffect} from "react";
import axios from "axios";

export const Info = () => {

  const [abouts, setAbout] = useState(null);

  useEffect(() => {
    const getAbout = async () => {
      await axios.get('http://localhost:5000/api/About').then(({data}) => {
        setAbout(data)
        console.log("data", data)
      })
    }
    getAbout()

  }, []);

  const [play, setPlay] = useState(false);
  const url = play
    ? 'https://www.youtube.com/embed/K1yp7Q1hH1c?autoplay=1'
    : '';
  return (
    <>

      <div className='info-blocks'>
        <div
          className='info-blocks__item js-img'
          style={{ backgroundImage: `url('/assets/img/info-item-bg1.jpg')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <img
                src='/assets/img/newpro2.jpeg'
                className='js-img'
                alt=''
              />
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>Check This Out</span>
              <h2>new collection for delicate skin</h2>
              <span className='info-blocks__item-descr'>
                Nourish your skin with toxin-free cosmetic products. With the
                offers that you can’t refuse.
              </span>
              <p>
                Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
                anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim.
              </p>
              <Link href='/shop'>
                <a className='btn'>
                  Shop now
                </a>
              </Link>
            </div>
          </div>
        </div>
        {!!abouts && abouts.map((about, index) => (
            <div
                className='info-blocks__item info-blocks__item-reverse js-img'
                style={{ backgroundImage: `url('/assets/img/info-item-bg2.jpg')` }}
            >
              <div className='wrapper'>
                <div className='info-blocks__item-img'>
                  <PromoVideo
                      videoUrl={url}
                      play={play}
                      onVideoPlay={() => setPlay(true)}
                  />
                </div>
                <div className='info-blocks__item-text'>
                  <span className='saint-text'>About Us</span>
                  <h2>{about.title}</h2>
                  <span className='info-blocks__item-descr'>
               {about.subtitle}
              </span>
                  <p>
                    {about.description}
                  </p>
                  <Link href='/about'>
                    <a className='info-blocks__item-link'>
                      <i className='icon-video'/>
                      Watch video about us
                      <i className='icon-arrow-lg'/>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
        ))
        }


      </div>

    </>
  );
};
