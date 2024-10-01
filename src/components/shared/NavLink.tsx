'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  activeClassName?: string; // 활성화된 경우 사용할 클래스 이름을 위한 프로퍼티
}

export const NavLink = ({ href, children, activeClassName }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link href={href} className={isActive ? activeClassName : ''}>
      {children}
    </Link>
  );
};
