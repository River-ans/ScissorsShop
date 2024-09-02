import Image from 'next/image';
import ScizzSVG from '../../../public/logo/SCIZZ.svg';
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
