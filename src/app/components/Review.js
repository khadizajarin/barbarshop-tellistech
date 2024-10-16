import React from 'react';
import Image from 'next/image';
import { Inter } from "next/font/google";
import { TbStarFilled } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import bgimg from "@/assets/image13.png"

const inter = Inter({ subsets: ['latin'] });

const Review = () => {
  return (
    <div className='bg-neutral relative'>
        <div className="container lg:max-w-7xl lg:mx-auto lg:h-[80vh] p-8 lg:flex lg:space-x-12 bg-neutral lg:flex-row flex-col items-center justify-center ">
            {/* First Part */}
            <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="relative">
                {/* Background Text */}
                <div className="absolute top-0 left-0 flex justify-start items-start z-0">
                    <p className="lg:text-[12rem] text-5xl text-gray-400 opacity-10 transform ">Testimonial</p>
                </div>
                
                {/* Foreground Content */}
                <div className="relative z-10">
                    <p className="text-base text-secondary mb-2">Testimonial</p>
                    <h1 className="text-6xl font-extralight text-accent mb-8">What Our <br/> Customer Say&apos;s</h1>
                </div>
                </div>
                {/* <h3 className="text-secondary text-sm mb-4"></h3>
                <p className="text-accent text-5xl font-thin mb-8"></p> */}
                <p className={`${inter.className} text-accent text-lg mb-8`}>Barber Trading Style and Proven Strategy to Make a Living</p>
                <button className='bg-neutral px-4 lg:px-6 py-3 lg:py-5 text-secondary border-secondary border-2 flex justify-center items-center gap-2 '> WRITE REVIEW <MdKeyboardDoubleArrowRight/>  </button>
            </div>

            {/* Second Part */}
            <div className="lg:w-1/3 z-20">
                <div className="bg-neutral shadow-lg p-4 flex flex-col justify-center items-center h-96 mb-8 lg:mb-0">
                    <Image
                        src={'https://html.themeori.net/barbex/assets/img/avatar/testimonial-1.jpg'}
                        alt="Review Image"
                        width={400}
                        height={300}
                        className="rounded-full w-16 h-16"
                    />
                    <div className="p-4">
                        <p className={`${inter.className} text-accent text-lg mb-4 text-center`}>Proin vel ipsum id risus ultrices scelerisque. Suspendisse mattis sit amet leo vel convallis.</p>
                        <div className="flex items-center justify-center text-secondary mt-8">
                                <TbStarFilled/>
                                <TbStarFilled/>
                                <TbStarFilled/>
                                <TbStarFilled/>
                                <FaRegStar />
                        </div>
                        <p className='text-accent text-xl text-center mt-2'>Devin Booker</p>
                        <p className='text-accent text-sm text-center mt-2'>Regular User</p>
                    </div>
                </div>
            </div>

            {/* Third Part */}
            <div className="lg:w-1/3 z-20">
                <div className="bg-neutral shadow-lg p-4 flex flex-col justify-center items-center h-96">
                    <Image
                        src={'https://html.themeori.net/barbex/assets/img/avatar/testimonial-2.jpg'}
                        alt="Review Image"
                        width={400}
                        height={300}
                        className="rounded-full w-16 h-16"
                    />
                    <div className="p-4">
                        <p className={`${inter.className} text-accent text-lg mb-4 text-center`}>Proin vel ipsum id risus ultrices scelerisque. Suspendisse mattis sit amet leo vel convallis.</p>
                        <div className="flex items-center justify-center text-secondary mt-8">
                                <TbStarFilled/>
                                <TbStarFilled/>
                                <TbStarFilled/>
                                <TbStarFilled/>
                                <FaRegStar />
                        </div>
                        <p className='text-accent text-xl text-center mt-2'>Michelle Yeoh</p>
                        <p className='text-accent text-sm text-center mt-2'>Regular User</p>
                    </div>
                </div>
            </div>
        </div>

        {/* bg scissors */}
       <Image 
            src={bgimg}
            width={500}
            height={300}
            alt="Background"
            objectFit="cover"
            className="z-0 absolute bottom-0 right-0 lg:w-1/3 w-full"
          />
    </div>
    
  );
};

export default Review;
