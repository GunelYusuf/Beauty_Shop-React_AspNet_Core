import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useState } from 'react';
import PromoNumberData from 'data/promoNumber/promoNumber';
import {useEffect} from "react";
import axios from "axios";

export const AboutPromo = () => {
  const [play, setPlay] = useState(false);

  const promoNumber = [...PromoNumberData];
  const url = play
    ? 'https://www.youtube.com/embed/K1yp7Q1hH1c'
    : '';
    const [abouts, setAbouts] = useState(null);

    useEffect(() => {
        const getAbout = async () => {
            await axios.get('http://localhost:5000/api/About').then(({data}) => {
                setAbouts(data)
            })
        }
        getAbout()

    }, []);

  return (
    <>

      <section className='promo-video'>
        <div className='wrapper'>
          <SectionTitle
              title='Welcome to BeShope'
              subTitle='Promotion video'
              body={`Today we can offer our customers exclusive products of 108 brands marked "only in BeShope"`}
          />

             <div className='promo-video__block'>

                     <PromoVideo
                         videoUrl={url}
                         play={url? play : ""}
                         onVideoPlay={() => setPlay(true)}

                     />
                 ))

                </div>


          <div className='promo-video__nums'>
            {promoNumber.map((promo, index) => (
              <div key={index} className='promo-video__num'>
                <span>{promo.number}</span>
                <h5>{promo.name}</h5>
              </div>
            ))}
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src=''
          alt=''
        />
      </section>

    </>
  );
};
