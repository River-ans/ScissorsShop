import { Brand } from '@/types/models';
import Image from 'next/image';

interface BrandOverviewProps {
  selectedBrand: Brand; // selectedBrand가 Brand 타입임을 명시
}

export const BrandOverview = ({ selectedBrand }: BrandOverviewProps) => {
  return (
    <div className='flex'>
      <picture className='w-7/12 h-80 flex items-center justify-center bg-slate-50 '>
        <Image
          src={selectedBrand.logo_url} // API에서 가져온 브랜드 로고 사용
          alt={selectedBrand.name}
          width={150}
          height={150}
          draggable={false}
        />
      </picture>
      <div className='flex flex-col w-5/12 items-center m-10 gap-4'>
        <h1 className='text-3xl'> {selectedBrand.description_title}</h1>
        <p className='text-sm'>{selectedBrand.description}</p>
      </div>
    </div>
  );
};
