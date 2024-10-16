"use client";
import { useState } from 'react';
import Image from 'next/image';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Inter } from "next/font/google";
import image6 from "@/assets/image6.png";
import image7 from "@/assets/image7.png";
import image8 from "@/assets/image8.png";
import image9 from "@/assets/image9.png";
import image10 from "@/assets/image10.png";
import image11 from "@/assets/image11.png";
import { FaRegCircleCheck } from "react-icons/fa6";


const inter = Inter({ subsets: ['latin'] });

const boxes = [
  { id: 1, title: "Trend Haircut", image: image6,bigImage: 'https://html.themeori.net/barbex/assets/img/features/services-1.jpg', description: "Description for Box 1" },
  { id: 2, title: "Hair Washing", image: image7,bigImage: 'https://html.themeori.net/barbex/assets/img/features/services-2.jpg', description: "Description for Box 2" },
  { id: 3, title: "Hair Color", image: image8,bigImage: 'https://html.themeori.net/barbex/assets/img/features/services-3.jpg', description: "Description for Box 3" },
  { id: 4, title: "Facial Hair Trim", image: image9,bigImage: 'https://html.themeori.net/barbex/assets/img/features/services-4.jpg', description: "Description for Box 4" },
  { id: 5, title: "Lather Shave", image: image10,bigImage: 'https://html.themeori.net/barbex/assets/img/features/services-5.jpg', description: "Description for Box 5" },
  { id: 6, title: "Head Message", image: image11,bigImage: 'https://html.themeori.net/barbex/assets/img/features/services-6.jpg', description: "Description for Box 6" },
];

const Services = () => {
  const [selectedBox, setSelectedBox] = useState(boxes[0]); // Default to the first box

  const handleBoxClick = (box) => {
    setSelectedBox(box); // Update the selected box when clicked
  };

  return (
    <div className="bg-neutral lg:p-20 lg:pt-40">
      {/* HeadLine */}
      <p className="text-base text-secondary mb-2 text-center">Our Services</p>
      <h1 className="text-4xl lg:text-6xl font-extralight text-accent mb-10 text-center">Popular Hair Cutting <br /> And salon</h1>

      {/* 6 boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:w-full">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`bg-white lg:w-48 lg:h-48 p-4 flex flex-col items-center justify-center cursor-pointer mx-8 ${selectedBox.id === box.id ? 'border-4 border-secondary' : ''}`}
            onClick={() => handleBoxClick(box)} // Handle box click
          >
            <Image
              src={box.image}
              alt={box.title}
              width={100}
              height={100}
              className="w-20 h-20 object-cover  mb-2"
            />
            <h2 className="text-lg font-semibold text-center">{box.title}</h2>
          </div>
        ))}
      </div>

      {/* Bottom Hero */}
      <div className='flex lg:flex-row flex-col mt-20'>
        <Image
          src={selectedBox.bigImage}
          alt={selectedBox.title}
          width={400}
          height={500}
          className="mb-6 lg:w-1/2"
        />
        <div className="p-6 lg:w-1/2 lg:pl-28">
          <h1 className="text-2xl lg:text-4xl font-extralight text-accent mb-8">Best Facial Hair Trim At Home Treatment
          </h1>
          <p className={`${inter.className} text-lg text-gray-600 mb-9 `}>
          Phasellus vitae purus ac urna consequat facilisis a vel leo. Maecenas hendrerit lacinia mollis. Fusce in leo lectus. Phasellus leo mi, pellentesque nec risus malesuada, volutpat porta ligula.
          </p>
          <p className='flex justify-start items-center gap-2  font-thin leading-7 mb-4'>
          <FaRegCircleCheck className='bg-secondary bg-opacity-30 rounded-full text-secondary' /> Easy to use salon special offer navigation
          </p>
          <p className='flex justify-start items-center gap-2  font-thin leading-7 mb-9'>
          <FaRegCircleCheck className='bg-secondary bg-opacity-30 rounded-full text-secondary'/> We care about our customers satisfaction
          </p>
          <button className='bg-secondary px-4 lg:px-6 py-3 lg:py-5 flex justify-center items-center gap-2 text-neutral'>
           BOOKING APPOINTMENT <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
