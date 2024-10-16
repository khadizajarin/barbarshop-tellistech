"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaPhoneAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='max-w-6xl mx-auto'>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-6">Barbex</div>
          <div className="flex items-center text-sm">
            <FaPhoneAlt className="mr-2" />
            <span>Hotline +125 (895) 658</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <div className="relative group">
            <button className="hover:text-yellow-500">Pages +</button>
          </div>
          <Link href="/portfolio">Portfolio +</Link>
          <Link href="/blog">Blog +</Link>
          <div className="relative group">
            <button className="hover:text-yellow-500">Shop +</button>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <FaSearch className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
          <Link href="/booking" className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-md">
           Booking Now
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-gray-700 text-white p-4">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/page1" className="block py-2">Page 1</Link>
          <Link href="/page2" className="block py-2">Page 2</Link>
          <Link href="/portfolio" className="block py-2">Portfolio</Link>
          <Link href="/blog" className="block py-2">Blog</Link>
          <Link href="/shop1" className="block py-2">Shop 1</Link>
          <Link href="/shop2" className="block py-2">Shop 2</Link>
          <Link href="/booking">
           Booking Now
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
