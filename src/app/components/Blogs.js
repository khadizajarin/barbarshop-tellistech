import React from 'react';
import Image from 'next/image';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { LuCalendarDays } from "react-icons/lu";

const CardSection = () => {
  const cards = [
    {
      id: 1,
      title: "Haircutting",
      date: "October 1, 2024",
      description: "We are a Haircut Salon Based in South Melbourne",
      imageUrl: "https://html.themeori.net/barbex/assets/img/blog/blog-1.jpg",
    },
    {
      id: 2,
      title: "Hair Color",
      date: "October 5, 2024",
      description: "Online booking appoitment For Salon, Hair Salon",
      imageUrl: "https://html.themeori.net/barbex/assets/img/blog/blog-2.jpg",
    },
    {
      id: 3,
      title: "Lather Shave",
      date: "October 10, 2024",
      description: "Customising your shave is Fun and easy",
      imageUrl: "https://html.themeori.net/barbex/assets/img/blog/blog-3.jpg",
    },
  ];

  return (
    <div className=''>
      <p className="text-base text-secondary mb-2 text-center lg:pt-28 pt-10">Blog and Article</p>
      <h1 className="text-4xl lg:text-6xl font-extralight text-accent mb-10 text-center px-8">Read Our BLog and News</h1>

     <div className="container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-20">
        {cards.map(card => (
          <div key={card.id} className="bg-white border-2 border-accent border-opacity-30 overflow-hidden">
            <Image 
              src={card.imageUrl} 
              alt={card.title} 
              width={400} 
              height={200} 
              className="w-full h-56 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" 
            />
            <div className="p-8 text-accent ">
              <div className='flex justify-start items-center lg:gap-2 gap-1 mb-4'>
                <button className='bg-secondary lg:px-4 px-2 py-2 lg:py-3 flex justify-center items-center gap-2 text-neutral'>{card.title}</button>
                <LuCalendarDays className='ml-4 text-secondary' />
                <h2 className=" text-sm hover:text-secondary"> {card.date}</h2>
              </div>
              
              <p className=" "></p>
              <p className="mt-2 hover:text-secondary text-2xl mb-5 lg:pr-4">{card.description}</p>
              <p className="mt-2 hover:text-secondary flex justify-start gap-3 items-center">READ MORE <MdKeyboardDoubleArrowRight /></p>
            </div>
          </div>
        ))}
      </div> 
    </div>
    
  );
};

export default CardSection;
