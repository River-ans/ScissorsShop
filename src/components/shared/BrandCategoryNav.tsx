import Image from 'next/image';

export const BrandCategoryNav = () => {
  return (
    <nav className='py-normal'>
      <ul className='flex flex gap-3'>
        <li className='w-20 h-20 rounded-full 	p-[3px]  overflow-hidden  border border-white	transition duration-500 ease-in-out	 hover:border-black '>
          <div className='bg-zinc-100 h-full w-full flex items-center rounded-full '>
            <Image
              src='/logo/aboveIcon.png' // 정적 파일에서 이미지 사용 (public 디렉토리)
              alt='Example Image'
              width={500}
              height={500}
            />
          </div>
        </li>
        <li className='w-20 h-20 rounded-full 	p-[3px]  overflow-hidden  border border-white	transition duration-300 ease-in-out	 hover:border-black '>
          <div className='bg-zinc-100 h-full w-full flex items-center rounded-full '>
            <Image
              src='/logo/feel.webp' // 정적 파일에서 이미지 사용 (public 디렉토리)
              alt='Example Image'
              width={500}
              height={500}
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};
