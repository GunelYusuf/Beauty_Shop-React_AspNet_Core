import { useRouter } from 'next/router';
import Link from 'next/link';

export const Nav = ({ navItem }) => {
  const router = useRouter();

  return (
    <ul className='header-nav'>
      {navItem.map((nav) => (
        <li key={nav.path}>
          <Link href={nav.path}>
            <a className={nav.path === router.pathname ? 'active' : ''}>
              {nav.name}
            </a>
          </Link>
          {nav.subNav && (
            <ul>
              {nav.subNav.map((sub) => (
                <li key={sub.path}>
                  <Link href={sub.path}>
                    <a>{sub.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
