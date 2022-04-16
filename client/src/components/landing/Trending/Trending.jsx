import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import axios from "axios"

export const Trending = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([])
  const [filterItem, setFilterItem] = useState('Make Up');
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      await axios.get('http://localhost:5000/api/Category').then(({data}) => setCategories(data))
    }

    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      await axios.get('http://localhost:5000/api/Product').then(({data}) => setProducts(data))
    }

    getProducts()
  }, [])

  useEffect(() => {
console.log(products)
  }, [products])

  const filterList = [
    {
      name: 'Make Up',
      value: 'makeup',
    },
    {
      name: 'SPA',
      value: 'spa',
    },
    {
      name: 'Perfume',
      value: 'perfume',
    },
    {
      name: 'Nails',
      value: 'nail',
    },
    {
      name: 'Skin',
      value: 'skin',
    },
    {
      name: 'Hair',
      value: 'hair',
    },
  ];

  useEffect(() => {
    setFiltered(products.filter(product => {
      return categories.find(item => item.id === product.categoryId)?.name === filterItem
    }))
  }, [filterItem, products])

  return (
    <>

      <section className='trending'>
        <div className='trending-content'>
          <SectionTitle
            subTitle='Cosmetics'
            title='Trending products'
            body='Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.'
          />
          <div className='tab-wrap trending-tabs'>
            <ul className='nav-tab-list tabs'>
              {filterList.map((item) => (
                <li
                  key={item.value}
                  onClick={() => setFilterItem(item.name)}
                  className={item.name === filterItem ? 'active' : ''}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className='products-items'>
              {
                products.length > 0 &&
              <ProductsCarousel products = {filtered} />
            }
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
