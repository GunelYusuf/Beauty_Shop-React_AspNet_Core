import categoryData from 'data/category/category';
import { Categories } from './Categories/Categories';

export const Category = () => {
  const categories = [...categoryData];
  return (
    <>
      <section className='all-categories'>
        <div className='top-categories__items'>
          <Categories categories={categories} />
        </div>
      </section>
    </>
  );
};
