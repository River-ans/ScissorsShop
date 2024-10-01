'use client';

import { useDisplayedBrandsQuery } from '@/queries/useBrandsQuery';
import { usePathname } from 'next/navigation';
import { BrandOverview } from '@/components/scissorsPage/BrandOverview';

export default function ScissorsBrandLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: brands, isLoading, error } = useDisplayedBrandsQuery();

  // 현재 경로 추출
  const pathname = usePathname();

  // 브랜드 ID 추출 (예를 들어, /scissors/[id] 형태일 경우)
  const brandName = pathname.split('/').pop(); // 경로의 마지막 부분에서 브랜드 ID 추출

  // 브랜드 데이터에서 해당 ID와 일치하는 브랜드 필터링
  const selectedBrand = brands?.find(
    (brand) => brand.name.toString() === brandName
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {selectedBrand ? (
        <>
          <BrandOverview selectedBrand={selectedBrand} />
        </>
      ) : (
        <p>Brand not found</p>
      )}
      <div>{children}</div>
    </>
  );
}
