"use client"
import Image from 'next/image';
import { useState } from 'react';
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const slides = [
  {
    heading: 'Best Haircut Salon For a Professional Look',
    image: image1,
    bgimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5z-5eBN5G1ByjnPatm-cX5UXACQQOs1UksX6fCfUVMeVinb05wSJFGHF6qpMSqz-ASjc&usqp=CAU'
  },
  {
    heading: 'Best Haircut Salon in the City',
    image: image2,
    bgimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wNqTBI_DFhfJoI-ihxwbeSBIms5jm1sO6_BrkChbZUn2pDn7i7KJgTdFpqCDy2-xz-8&usqp=CAU'
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-accent overflow-hidden">
      <div
        className="flex transition-transform duration-900"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative min-w-full flex flex-col lg:flex-row bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${slide.bgimage})` }}
          >
            <div className="absolute inset-0 bg-black opacity-80"></div> {/* Transparent overlay */}
            <div className="w-full lg:w-1/2 pl-4 lg:pl-10 pb-12 lg:pb-48 flex flex-col items-start justify-center relative z-10 ml-0 lg:ml-16 mt-20 lg:mt-0">
              <h5 className="text-lg lg:text-xl font-medium text-secondary mb-2 lg:mb-4">Welcome to Our Barbex</h5>
              <h2 className="text-3xl lg:text-7xl font-medium text-neutral tracking-wide">{slide.heading}</h2>
              <div className='flex flex-col lg:flex-row gap-3 lg:gap-5 mt-4 lg:mt-8'>
                <button className='bg-secondary px-4 lg:px-6 py-3 lg:py-5 flex justify-center items-center gap-2 text-neutral'>Read More <MdKeyboardDoubleArrowRight/>  </button>
                <button className='bg-transparent px-4 lg:px-6 py-3 lg:py-5 border-secondary border-2 text-secondary flex justify-center items-center gap-2'>View All Services <MdKeyboardDoubleArrowRight/>  </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 pt-10 lg:pt-20 h-full relative z-10">
              <Image width={500} height={100} src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 lg:left-0 transform -translate-y-1/2 bg-transparent text-secondary border-2 rounded-full border-secondary px-3 lg:px-4 py-3 lg:py-4 ml-2 lg:ml-6"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-1/2 right-2 lg:right-0 transform -translate-y-1/2 bg-transparent text-secondary border-2 rounded-full border-secondary px-3 lg:px-4 py-3 lg:py-4 mr-2 lg:mr-6"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Banner;
