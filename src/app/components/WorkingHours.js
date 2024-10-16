import React from 'react';
import Image from 'next/image';
import imageBackground from "@/assets/image7.png";
import { Inter } from "next/font/google";
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const inter = Inter({ subsets: ['latin'] });

const WorkingHours = () => {
  return (
    <div className="relative lg:h-[90vh]">
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0">
        <Image 
          src={'https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyfGVufDB8fDB8fHww'}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      </div>

      {/* Animated Circles */}
      <div className="lg:absolute lg:p-0 p-20 z-20 flex justify-center items-center h-full lg:w-1/2">
        <div className="relative flex justify-center items-center">
          <MdOutlineSlowMotionVideo className="bg-neutral text-secondary text-8xl p-4 rounded-full relative z-10" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="absolute animate-ping rounded-full h-32 w-32 border-2 border-neutral opacity-50"></div>
            <div className="absolute animate-ping rounded-full h-24 w-24 border-2 border-neutral opacity-25"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 flex justify-end h-full">
        <div className="w-full lg:w-2/5 bg-secondary p-8 lg:p-16 flex flex-col items-start justify-center">
          <h1 className="text-neutral text-4xl lg:text-6xl font-thin py-4 text-left"> Working Hours</h1>
          <p className={`${inter.className} text-neutral text-base py-4`}>Fusce id lorem risus. Duis mattis, nulla et placerat pretium, purus ex luctus nisi,</p>

          <table className="w-full text-left">
            <tbody className="text-neutral text-lg font-thin">
              <tr className="border-b border-dotted border-neutral">
                <td className="py-4">Mon day</td>
                <td className="py-4">9: AM - 6: PM</td>
              </tr>
              <tr className="border-b order-dotted border-neutral">
                <td className="py-4">Thursday</td>
                <td className="py-4">11: AM - 8: PM</td>
              </tr>
              <tr className="border-b order-dotted border-neutral">
                <td className="py-4">Wednesday</td>
                <td className="py-4">6: AM - 4: PM</td>
              </tr>
            </tbody>
          </table>

          <button className='bg-secondary px-4 lg:px-6 py-3 lg:py-5 border-2 border-neutral flex justify-center items-center gap-2 text-neutral mt-16'>
            BOOKING APPOINTMENT <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
