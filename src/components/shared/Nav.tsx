import { NavLink } from './NavLink';

export default function Nav() {
  return (
    <nav className='ml-6 px-normal w-full hidden sm:block'>
      <ul className='flex gap-3 text-sm text-gray-500'>
        <li>
          <NavLink href='/scissors' activeClassName='text-black'>
            Scissors
          </NavLink>
        </li>
        <li>
          <NavLink href='/services' activeClassName='text-black'>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink href='/contact' activeClassName='text-black'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
