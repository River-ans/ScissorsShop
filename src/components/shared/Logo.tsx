import Link from 'next/link';
import ScizzLogoSVG from '@/assets/ScizzLogoSVG';

export default function Logo() {
  return (
    <h1>
      <Link href='/'>
        <ScizzLogoSVG />
      </Link>
    </h1>
  );
}
