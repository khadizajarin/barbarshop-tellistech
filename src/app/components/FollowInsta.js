import React from 'react';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { BsHandIndexThumb } from "react-icons/bs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

const FollowInsta = () => {
  const images = [
    "https://html.themeori.net/barbex/assets/img/features/instagram-1.jpg",
    "https://html.themeori.net/barbex/assets/img/features/instagram-2.jpg",
    "https://html.themeori.net/barbex/assets/img/features/instagram-3.jpg",
    "https://html.themeori.net/barbex/assets/img/features/instagram-4.jpg",
    "https://html.themeori.net/barbex/assets/img/features/instagram-5.jpg",
    "https://html.themeori.net/barbex/assets/img/features/instagram-6.jpg",
  ];

  return (
    <div className="relative lg:mt-40 mt-10 ">
      {/* Black Background */}
      <div className="absolute inset-0 bg-accent z-0 lg:top-32 top-6"></div>
      {/* Image Row */}
      <div className="flex justify-center items-center px-10 space-x-2 z-10 relative mb-10">
        {images.map((src, index) => (
          <div key={index} className="relative w-1/6 group overflow-hidden"> {/* Added overflow-hidden here */}
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={200}
              height={200}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out"
            />
            {/* Golden Overlay */}
            <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-50 top-0 left-0 right-0 h-full transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            {/* Instagram Icon */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              < FaInstagram className="text-3xl text-neutral w-8 h-8 font-extrabold" />
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex lg:flex-row flex-col lg:p-10 p-4 z-20 relative max-w-7xl mx-auto lg:pb-20 pb-10">

        {/* Logo and Text Section */}
        <div className="flex justify-start gap-6 w-full flex-col h-full lg:text-base text-sm pb-4">
          <Image
            src="https://html.themeori.net/barbex/assets/img/logo.png" 
            alt="Logo"
            width={100}
            height={100}
            className=" w-36 "
          />
          <div className="flex flex-row space-x-7 text-neutral ">
            <p className='hover:text-secondary'>Trend Haircut</p>
            <p className='hover:text-secondary'>Hair Washing </p>
            <p className='hover:text-secondary'>Hair Coloring</p>
            <p className='hover:text-secondary'>Facial hair Trim</p>
          </div>
        </div>
        
        {/* Input and Submit Button */}
        <div className="flex items-center h-20  ">
          <input
            type="text"
            placeholder="Email Address"
            className={`${inter.className}  lg:px-4 px-2 py-2 border-[0.0001rem] bg-transparent border-secondary h-20 lg:w-[30rem] text-xl leading-relaxed`}
          />
          <button className="px-4 py-2 bg-secondary text-neutral h-20 w-20 flex justify-center items-center">
            <BsHandIndexThumb className='lg:w-6 lg:h-6 w-4 h-4' />
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default FollowInsta;
