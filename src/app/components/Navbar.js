"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaPhoneAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GrBasket } from "react-icons/gr";
import { FaRulerCombined } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-primary text-neutral border-1 border-neutral border-opacity-25'>
      <div className="container flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-6 flex justify-center items-center gap-2"> 
            <FaRulerCombined className='text-neutral bg-secondary' />
            Barbex
          </div>
          <div className="hidden md:flex items-center text-sm border-l-2 pl-6 border-white border-opacity-50">
            <FiPhoneCall className="mr-2 border-2 rounded-full border-opacity-30 w-6 h-6 p-[3px]" />
            <span>Hotline +125 (895) 658</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/">Pages +</Link>
          <Link href="/portfolio">Portfolio +</Link>
          <Link href="/blog">Blog +</Link>
          <Link href="/shop">Shop +</Link>
        </nav>
        <div className="flex items-center space-x-4 md:space-x-8">
          <FaSearch className="cursor-pointer" />
          <div className="relative inline-block">
            <GrBasket className="cursor-pointer" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-secondary rounded-full text-xs px-1 text-neutral">0</span>
          </div>
          <Link href="/booking" className="bg-secondary text-neutral px-4 py-2 hidden md:inline-block">
            <button className='flex justify-center items-center lg:gap-2'>
              Booking Now 
              <MdKeyboardDoubleArrowRight className='font-extrabold' />
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-secondary bg-opacity-20 text-white p-4">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/" className="block py-2">Pages +</Link>
          <Link href="/portfolio" className="block py-2">Portfolio +</Link>
          <Link href="/blog" className="block py-2">Blog +</Link>
          <Link href="/shop" className="block py-2">Shop +</Link>
          <Link href="/booking" className="block py-2 bg-secondary text-neutral px-4  mt-2">
            Booking Now
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
