"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GrBasket } from "react-icons/gr";
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const handleMouseEnter = (menu) => {
    setDropdownOpen({ ...dropdownOpen, [menu]: true });
  };

  const handleMouseLeave = (menu) => {
    setDropdownOpen({ ...dropdownOpen, [menu]: false });
  };

  return (
    <header className='bg-accent text-neutral border-1 border-neutral z-50 fixed top-0 left-0 right-0 lg:px-10 px-2'>
      <div className="container h-24 flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-6 flex justify-center items-center gap-2"> 
            <Image src={'https://html.themeori.net/barbex/assets/img/logo.png'} width={100} height={100} alt='Image' />
          </div>
          <div className="hidden md:flex items-center text-sm border-l-2 pl-6 border-white border-opacity-50">
            <FiPhoneCall className="mr-2 border-[1px] rounded-full border-opacity-30 w-8 h-8 p-[4px]" />
            <span>Hotline +125 (895) 658</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link className='hover:text-secondary' href="/">Home</Link>
          <div 
            className='relative'
            onMouseEnter={() => handleMouseEnter('pages')}
            onMouseLeave={() => handleMouseLeave('pages')}
          >
            <Link className='hover:text-secondary flex items-center' href="#">
              Pages 
              <span className={`transition-transform duration-300 ml-1 ${dropdownOpen.pages ? 'rotate-45' : 'rotate-0'}`}>+</span>
            </Link>
            {dropdownOpen.pages && (
              <div className='absolute p-4 bg-secondary text-neutral shadow-lg'>
                <Link className='block px-4 py-2' href="/about">About</Link>
                <Link className='block px-4 py-2' href="/services">Services</Link>
                <Link className='block px-4 py-2' href="/contact">Contact</Link>
              </div>
            )}
          </div>
          <div 
            className='relative'
            onMouseEnter={() => handleMouseEnter('portfolio')}
            onMouseLeave={() => handleMouseLeave('portfolio')}
          >
            <Link className='hover:text-secondary flex items-center' href="/portfolio">
              Portfolio 
              <span className={`transition-transform duration-300 ml-1 ${dropdownOpen.portfolio ? 'rotate-45' : 'rotate-0'}`}>+</span>
            </Link>
            {dropdownOpen.portfolio && (
              <div className='absolute p-4 bg-secondary text-neutral shadow-lg'>
                <Link className='block px-4 py-2' href="/portfolio/design">Design</Link>
                <Link className='block px-4 py-2' href="/portfolio/development">Development</Link>
                <Link className='block px-4 py-2' href="/portfolio/photography">Photography</Link>
              </div>
            )}
          </div>
          <div 
            className='relative'
            onMouseEnter={() => handleMouseEnter('blog')}
            onMouseLeave={() => handleMouseLeave('blog')}
          >
            <Link className='hover:text-secondary flex items-center' href="/blog">
              Blog 
              <span className={`transition-transform duration-300 ml-1 ${dropdownOpen.blog ? 'rotate-45' : 'rotate-0'}`}>+</span>
            </Link>
            {dropdownOpen.blog && (
              <div className='absolute p-4 bg-secondary text-neutral shadow-lg'>
                <Link className='block px-4 py-2' href="/blog/latest">Latest Posts</Link>
                <Link className='block px-4 py-2' href="/blog/categories">Categories</Link>
                <Link className='block px-4 py-2' href="/blog/authors">Authors</Link>
              </div>
            )}
          </div>
          <div 
            className='relative'
            onMouseEnter={() => handleMouseEnter('shop')}
            onMouseLeave={() => handleMouseLeave('shop')}
          >
            <Link className='hover:text-secondary flex items-center' href="/shop">
              Shop 
              <span className={`transition-transform duration-300 ml-1 ${dropdownOpen.shop ? 'rotate-45' : 'rotate-0'}`}>+</span>
            </Link>
            {dropdownOpen.shop && (
              <div className='absolute p-4 bg-secondary text-neutral shadow-lg'>
                <Link className='block px-4 py-2' href="/shop/men">Men</Link>
                <Link className='block px-4 py-2' href="/shop/women">Women</Link>
                <Link className='block px-4 py-2' href="/shop/accessories">Accessories</Link>
              </div>
            )}
          </div>
        </nav>
        <div className="flex items-center space-x-4 md:space-x-8">
          <FaSearch className="cursor-pointer" />
          <div className="relative inline-block">
            <GrBasket className="cursor-pointer" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-secondary rounded-full text-neutral-full text-xs px-1 text-neutral">0</span>
          </div>
          <Link href="/booking" className="bg-secondary text-neutral px-4 py-2 hidden md:inline-block">
            <button className='flex justify-center items-center lg:gap-2'>
              BOOKING NOW
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
          <Link href="/booking" className="block py-2 bg-secondary text-neutral px-4 mt-2">
            Booking Now
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
