import { Card } from './Card/Card';

const instaData = [
  {
    image: '/assets/img/creaminsta.jpeg',
    link: '#/',
    id: '1',
  },
  {
    image: '/assets/img/insta4.jpeg',
    link: '#/',
    id: '2',
  },
  {
    image: '/assets/img/insta1.jpeg',
    link: '#/',
    id: '3',
  },
  {
    image: '/assets/img/instael.jpeg',
    link: '#/',
    id: '4',
  },
  {
    image: '/assets/img/Home3.jpeg',
    link: '#/',
    id: '5',
  },
  {
    image: '/assets/img/makeup4.jpeg',
    link: '#/',
    id: '6',
  },
];

export const Insta = () => {
  return (
    <>
      <div className='insta-photos'>
        {instaData.map((insta) => (
          <Card key={insta.id} insta={insta} />
        ))}
      </div>
    </>
  );
};
