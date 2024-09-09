'use client';
import Image from 'next/image';
import { useDisplayedBrandsQuery } from '@/queries/useBrandsQuery';

export const BrandCategoryNav: React.FC = () => {
  const { data: brands, isLoading, error } = useDisplayedBrandsQuery();

  if (isLoading) {
    return <>loading</>;
  }

  if (error) {
    return <>error</>;
  }

  return (
    <nav className='py-normal'>
      <ul className='flex flex gap-3'>
        <li className='flex flex-col	items-center'>
          <div className='w-20 h-20 bg-slate-100 rounded-full p-[3px] overflow-hidden border border-white transition duration-500 ease-in-out hover:border-black'></div>
          <div className='text-black text-sm'>All</div>
        </li>
        {brands?.map((brand) => (
          <li key={brand.id} className='flex flex-col	items-center'>
            <div className='flex w-20 h-20 bg-slate-100 rounded-full p-[3px] overflow-hidden border border-white transition duration-500 ease-in-out hover:border-black'>
              <Image
                src={brand.logo_url} // API에서 가져온 브랜드 로고 사용
                alt={brand.name}
                width={500}
                height={500}
              />
            </div>
            <div className='text-black text-sm'>{brand.name}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
