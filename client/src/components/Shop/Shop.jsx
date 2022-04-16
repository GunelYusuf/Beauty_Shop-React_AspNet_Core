import { Products } from 'components/Product/Products/Products';
import { PagingList } from 'components/shared/PagingList/PagingList';
import { usePagination } from 'components/utils/Pagination/Pagination';
import productData from 'data/product/product';
import Slider from 'rc-slider';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { AsideItem } from '../shared/AsideItem/AsideItem';
import httpAgent from "../../api/httpAgent";
import axios from "axios";




const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const options =
    [
      { value: 'highToMin', label: 'From expensive to cheap' },
      { value: 'minToHigh', label: 'From cheap to expensive' },
    ]

export const Shop = () => {


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

  const [allProducts,setAllProducts]=useState([])

  useEffect( ()=>{

    const fetchData = async () => {

        try {
          await httpAgent.Product.getAllProduct().then((response) =>{
            setAllProducts(response)

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

  const [productOrder, setProductOrder] = useState(
    allProducts.sort((a, b) => (a.price < b.price ? 1 : -1))
  );


  const [products, setProducts] = useState([...productOrder]);
  const [filter, setFilter] = useState({ isNew: false, isSale: true });

  useEffect(() => {
    setProducts(productOrder);
  }, [productOrder]);

  useEffect(() => {
    if (filter.isNew && filter.isSale) {
      const newPro = productOrder.filter(
        (pd) => pd.isNew === true && pd.isSale === true
      );
      setProducts(newPro);
    } else if (filter.isNew && !filter.isSale) {
      const newPro = productOrder.filter((pd) => pd.isNew === true);
      setProducts(newPro);
    } else if (filter.isSale && !filter.isNew) {
      const newPro = productOrder.filter((pd) => pd.isSale === true);
      setProducts(newPro);
    } else {
      setProducts([...productOrder]);
    }
  }, [filter, productOrder]);
  const recentlyViewed = allProducts.slice(0, 3);
  const todaysTop = allProducts.slice(3, 6);
  const paginate = usePagination(productOrder, 9);

  const handleSort = (value) => {
    console.log(value)
    if (value === 'highToMin') {
      const newOrder = [...allProducts].sort((a, b) => (a.price < b.price));
      console.log(newOrder)
      setProductOrder(newOrder);
    }
    if (value === 'minToHigh') {
      const newOrder = [...allProducts].sort((a, b) => (a.price > b.price)).reverse();
  console.log(newOrder)
      setProductOrder(newOrder);
    }
  };

  useEffect(() => {
    handleSort("highToMin")
  }, [allProducts])

  return (
    <div>

      <div className='shop'>
        <div className='wrapper'>
          <div className='shop-content'>

            <div className='shop-aside'>
              <div className='box-field box-field__search'>
                <input
                  type='search'
                  className='form-control'
                  placeholder='Search'
                />
                <i className='icon-search'/>
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Categories</span>
                {data.map((category) =>(
                    <ul key={category.id}>
                      <li>
                        <a href='#'>
                          {category.name}<span>{category.products.quantity}</span>
                        </a>
                      </li>

                    </ul>
                ))}
              
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Price</span>
                <div className='range-slider'>
                  <Range
                    min={0}
                    max={20}
                    defaultValue={[0, 20]}
                    tipFormatter={(value) => `${value}$`}
                    allowCross={false}
                    tipProps={{
                      placement: 'bottom',
                      prefixCls: 'rc-slider-tooltip',
                    }}
                  />
                </div>
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>You have viewed</span>
                {recentlyViewed.map((data) => (
                  <AsideItem key={data.id} aside={data} />
                ))}
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Top 3 for today</span>
                {todaysTop.map((data) => (
                  <AsideItem key={data.id} aside={data} />
                ))}
              </div>
            </div>

            <div className='shop-main'>
              <div className='shop-main__filter'>
                <div className='shop-main__checkboxes'>
                  <label className='checkbox-box'>
                    <input
                      checked={filter.isSale}
                      onChange={() =>
                        setFilter({ ...filter, isSale: !filter.isSale })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'/>
                    SALE
                  </label>
                  <label className='checkbox-box'>
                    <input
                      checked={filter.isNew}
                      onChange={() =>
                        setFilter({ ...filter, isNew: !filter.isNew })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'/>
                    NEW
                  </label>
                </div>
                <div className='shop-main__select'>
                  <Dropdown
                    options={options}
                    className='react-dropdown'
                    onChange={(option) => handleSort(option.value)}
                    value={options[0]}
                  />
                </div>
              </div>
              <div className='shop-main__items'>
                <Products products={paginate?.currentData()} />
              </div>


               <PagingList paginate={paginate} />
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
        <img
          className='shop-decor js-img'
          src='/assets/img/shop-decor.jpg'
          alt=''
        />
      </div>

    </div>
  );
};
