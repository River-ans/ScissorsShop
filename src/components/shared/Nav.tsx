import { NavLink } from './NavLink';

export default function Nav() {
  return (
    <nav className='ml-6 px-normal w-full'>
      <ul className='flex gap-3 text-sm'>
        <li>
          <NavLink href='/scissors'>Scissors</NavLink>
        </li>
        <li>
          <NavLink href='/services'>Services</NavLink>
        </li>
        <li>
          <NavLink href='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
