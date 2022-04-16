import { header } from 'data/data.header';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Nav } from './Nav/Nav';
import { navItem } from 'data/data.header';
import { CartContext } from 'pages/_app';
import {useAppDispatch, useAppSelector} from "../../../store/ConfigureStore";
import {fetchCurrentUser, signOut} from "../../Profile/AccountSlice";
import httpAgent from "../../../api/httpAgent";
import {setBasket} from "../../Cart/CartSlice";


export const Header = () => {

  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.account)
  const {basket} = useAppSelector(state => state.basket)
  const [loading,setLoading] = useState(true);

  useEffect( ()=>{
    dispatch(fetchCurrentUser())
  },[dispatch])

  function getCookie(key) {
    const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }

  useEffect(()=>{
    const buyerId = getCookie('buyerId');
    if (buyerId){
      httpAgent.Basket.getBaskets()
          .then(basket => dispatch(setBasket(basket)))
          .catch(error => console.log(error))
          .finally(()=>setLoading(false))
    }else {
      setLoading(false)
    }
  },[dispatch])

  const [promo, setPromo] = useState(true);
  const [fixedNav, setFixedNav] = useState(false);

  // For Fixed nav
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  useEffect(() => {
    console.log("VVV",basket)
  }, [basket])

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };
  return (
    <>

      <header className='header'>
        {promo && (
          <div className='header-top'>

            <i
              onClick={() => setPromo(false)}
              className='header-top-close js-header-top-close icon-close'
            />
          </div>
        )}
        <div className={`header-content ${fixedNav ? 'fixed' : ''}`}>
          <div className='header-logo'>
            <Link href='/'>
              <a>
                <img src={header.logo} alt='' />
              </a>
            </Link>
          </div>
          <div className='header-box'>
            {/* Nav */}
            <Nav navItem={navItem} />
            {/* header options */}
            <ul className='header-options'>
              <li>
                <Link href='/faq'>
                  <a>
                    <i className='icon-search'/>
                  </a>
                </Link>
              </li>

              <li>
                {user?
                    <Link href="#"  >
                      <a onClick={()=>dispatch(signOut())}>
                       Log Out
                      </a>
                    </Link>
                : null}
              </li>
              <li>
                <Link href='/profile'>
                  <a>
                    <i className='icon-user'/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/wishlist'>
                  <a>
                    <i className='icon-heart'/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/cart'>
                  <a>
                    <i className='icon-cart'/>
                    {basket && basket.items?.length > 0 ?
                   <span> {basket.items?.length}</span> : ""}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='btn-menu js-btn-menu'>
            {[1, 2, 3].map((i) => (
              <span key={i}>&nbsp;</span>
            ))}
          </div>
        </div>
      </header>


    </>
  );
};
