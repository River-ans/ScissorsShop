'use client';
import BarsSVG from '@/assets/BarsSVG';
import { useSidebarStore } from '@/stores/sidebarStore';

export default function SidebarToggleButton() {
  const { toggleSidebar } = useSidebarStore();

  return (
    <button className='sm:hidden' onClick={toggleSidebar}>
      <BarsSVG />
    </button>
  );
}
