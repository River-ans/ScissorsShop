import Link from 'next/link';
import Logo from './Logo';
import Nav from './Nav';
import SearchSVG from '@/assets/SearchSVG';
import ShoppingBagSVG from '@/assets/ShoppingBagSVG';

export default function Header() {
  return (
    <header className='h-14 px-normal flex items-center'>
      <Logo />
      <Nav />
      <div className='flex gap-3'>
        <button>
          <SearchSVG />
        </button>
        <button>
          <ShoppingBagSVG />
        </button>
        <button>Login</button>
      </div>
    </header>
  );
}
