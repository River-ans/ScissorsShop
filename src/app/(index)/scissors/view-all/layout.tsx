import { BrandCategoryNav } from '@/components/scissorsPage/BrandCategoryNav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scissors',
  description: 'Generated by create next app',
};

export default function ScissorsBrandViewAllLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
