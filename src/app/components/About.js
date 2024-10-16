"use client"
import Image from 'next/image';
import { useState } from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import {Inter} from "next/font/google"


const inter = Inter({ subsets: ['latin'] })


const About = () => {
  return (
    <div className=" flex lg:flex-row flex-col items-center bg-neutral lg:h-[120vh] h-full lg:px-20 ">
      <div className=" flex flex-row gap-8 lg:w-2/5 p-5 relative mt-8">
        <div className=" mb-4">
          <Image
            src={image3} 
            alt="Image 1"
            width={700} 
            height={500} 
            className="lg:w-[25rem] w-[12rem] lg:h-[28.75rem] h-[13rem] object-cover shadow-lg"
          />
        </div>
        <div className="absolute lg:right-0 right-8 -bottom-10 mb-4">
          <Image
            src={image4} 
            alt="Image 2"
            width={500} 
            height={400} 
            className="lg:w-[18.75rem] w-[9rem] lg:h-[18.75rem] h-[9rem] object-cover shadow-lg border-neutral lg:border-[1.5rem] border-[0.5rem]"
          />
        </div>
        <div className="">
          <Image
            src={image5} 
            alt="Image 3"
            width={600} 
            height={500} 
            className="lg:w-44 w-20 lg:h-44 h-20 object-cover shadow-lg mt-8"
          />
        </div>
      </div>
      <div className="p-6 lg:w-3/5 lg:pl-28 mt-8"> 
        <p className="text-base text-secondary mb-2">About Us</p>
        <h1 className="text-6xl font-extralight text-accent mb-8 ">Best Haircut Salons For Men Women</h1>
        <p className={`${inter.className} text-lg text-gray-600 mb-9 lg:pr-28`}>
        Haircut is a term used to describe when a person removes the hair on their head. This is done to allow for better access to the part of the body that needs cutting.
        </p>

        <p className='border-l-2 border-secondary pl-4 lg:pr-60 font-thin leading-7 mb-9'>We&apos;re a leading independent salon in Dubai, offering everything from haircuts to exfoliation and</p>
        <button className='bg-secondary px-4 lg:px-6 py-3 lg:py-5 flex justify-center items-center gap-2 text-neutral'>READ MORE <MdKeyboardDoubleArrowRight/>  </button>
      </div>
    </div>
  );
};

export default About;
