'use client';
import Image from 'next/image';
import { useDisplayedBrandsQuery } from '@/queries/useBrandsQuery';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const BrandCategoryNav: React.FC = () => {
  const { data: brands, isLoading, error } = useDisplayedBrandsQuery();
  const pathname = usePathname();

  if (isLoading) {
    return <>loading</>;
  }

  if (error) {
    return <>error</>;
  }

  return (
    <nav className='p-normal'>
      <ul className='flex flex gap-3'>
        <li>
          <Link
            href={`/scissors/view-all`}
            className='flex flex-col	items-center'
            draggable={false}
          >
            <div
              className={`flex w-20 h-20 bg-slate-100 rounded-full p-[3px] overflow-hidden border border-white transition duration-500 ease-in-out hover:border-black ${
                pathname.startsWith(`/scissors/view-all`) ? 'border-black ' : ''
              }`}
            ></div>
            <span className='text-black text-sm'>All</span>
          </Link>
        </li>
        {brands?.map((brand) => (
          <li key={brand.id}>
            <Link
              href={`/scissors/${brand.name}`}
              className={`flex flex-col items-center`}
              draggable={false}
            >
              <div
                className={`flex w-20 h-20 bg-slate-100 rounded-full p-[3px] overflow-hidden border border-white transition duration-500 ease-in-out hover:border-black ${
                  pathname.startsWith(`/scissors/${brand.name}`)
                    ? 'border-black '
                    : ''
                }`}
              >
                <Image
                  src={brand.logo_url} // API에서 가져온 브랜드 로고 사용
                  alt={brand.name}
                  width={500}
                  height={500}
                  draggable={false}
                />
              </div>
              <span className='text-black text-sm'>{brand.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
