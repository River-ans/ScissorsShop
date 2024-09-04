import Logo from './Logo';
import Nav from './Nav';
import SearchSVG from '@/assets/SearchSVG';
import ShoppingBagSVG from '@/assets/ShoppingBagSVG';
import BarsSVG from '@/assets/BarsSVG';
import SidebarToggleButton from './SidebarToggleButton';

export default function Header() {
  return (
    <header className='h-14 px-normal flex items-center'>
      <Logo />
      <Nav />
      <div className='flex gap-3 ml-auto'>
        <button>
          <SearchSVG />
        </button>
        <button>
          <ShoppingBagSVG />
        </button>
        <button className='hidden sm:block'>Login</button>
        <SidebarToggleButton />
      </div>
    </header>
  );
}
