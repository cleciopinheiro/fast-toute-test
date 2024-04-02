'use client';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiChat4Line } from 'react-icons/ri';
import { IoMdHelpCircleOutline } from 'react-icons/io';

interface MenuProps {
  text?: string;
  onClick?: () => void;
  open?: boolean;
}

function Menu({ text, onClick, open }: MenuProps) {
  return (
    <nav className="bg-[var(--input-color)] h-[7vh] p-4 flex justify-between items-center">
      <GiHamburgerMenu onClick={ onClick } size={24} className="text-white " />
      <h1 className="text-white text-lg">{text}</h1>
      <div className="flex gap-6">
        <RiChat4Line size={24} className="text-white " />
        <IoMdHelpCircleOutline size={24} className="text-white " />
      </div>
    </nav>
  );
}

export default Menu;
