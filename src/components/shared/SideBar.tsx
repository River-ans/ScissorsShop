'use client';
import { useState } from 'react';
import { useSidebarStore } from '@/stores/sidebarStore';
import XmarkSVG from '@/assets/XmarkSVG';
import Nav from './Nav';
import { NavLink } from './NavLink';

export default function SideBar() {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const [isAnimating, setIsAnimating] = useState(false);

  // 사이드바 열기/닫기 트리거
  const handleToggleSidebar = () => {
    if (isOpen) {
      // 닫힐 때 애니메이션 시작
      setIsAnimating(true);
      setTimeout(() => {
        toggleSidebar(); // 애니메이션이 끝난 후에 상태 변경
        setIsAnimating(false); // 애니메이션 종료
      }, 500); // Tailwind 애니메이션 지속 시간 (500ms)과 일치
    } else {
      toggleSidebar(); // 바로 열기
    }
  };
  return (
    <div className='relative'>
      {/* 오버레이 */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-30`}
          onClick={handleToggleSidebar}
        />
      )}

      {/* 사이드바 */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen && !isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='p-normal h-full flex flex-col'>
          <div className='flex w-full justify-end'>
            <button onClick={handleToggleSidebar}>
              <XmarkSVG />
            </button>
          </div>
          <nav className='mt-4 w-full'>
            <ul className='flex flex-col gap-4 text-lg'>
              <li onClick={handleToggleSidebar}>
                <NavLink href='/scissors'>Scissors</NavLink>
              </li>
              <li onClick={handleToggleSidebar}>
                <NavLink href='/services'>Services</NavLink>
              </li>
              <li onClick={handleToggleSidebar}>
                <NavLink href='/contact'>Contact</NavLink>
              </li>
            </ul>
          </nav>
          <button className='mt-auto flex'>Login</button>
        </div>
      </div>
    </div>
  );
}
