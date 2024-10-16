import React from 'react';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { GrBasket } from 'react-icons/gr';
import { TbStarFilled } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";

const Products = () => {
  const products = [
    { id: 1, title: "New Face Wash", bigImage: 'https://html.themeori.net/barbex/assets/img/products/products-1.jpg', price: "$51.39" },
    { id: 2, title: "New Face Wash", bigImage: 'https://html.themeori.net/barbex/assets/img/products/products-2.jpg', price: "$56.00" },
    { id: 3, title: "New Face Wash", bigImage: 'https://html.themeori.net/barbex/assets/img/products/products-3.jpg', price: "$63.87" },
    { id: 4, title: "New Face Wash", bigImage: 'https://html.themeori.net/barbex/assets/img/products/products-4.jpg', price: "$47.89" },
  ];

  return (
    <div className='bg-neutral'>
        {/* HeadLine */}

        <div className="relative lg:pt-28 pt-10">
          {/* Background Text */}
          <div className="absolute top-0 right-0 left-0 lg:bottom-0 flex justify-center items-center z-0">
            <p className="lg:text-[12rem] text-7xl text-gray-400 opacity-10 transform ">Products</p>
          </div>
          
          {/* Foreground Content */}
          <div className="relative z-10 text-center">
            <p className="text-base text-secondary mb-2">Our Products</p>
            <h1 className="tlg:ext-6xl text-5xl font-extralight text-accent mb-8">Evoke the experience of one of our <br/> barber shops</h1>
          </div>
        </div>


        {/* products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center lg:p-20 p-10">
        {products.map((product) => (
            <div key={product.id} className="relative flex flex-col  h-full justify-center items-center w-full">
            <Image 
                src={product.bigImage}
                alt={product.title}
                width={300}
                height={300}
                className="object-cover w-80 h-80 flex justify-center items-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center w-80 h-80 justify-center transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
                <div className="flex justify-start items-center gap-4 space-x-4">
                <GrBasket className="text-accent bg-neutral hover:text-neutral hover:bg-secondary w-12 h-12 p-3 rounded-full  text-xl" />
                <FaShoppingCart className="text-accent bg-neutral hover:text-neutral hover:bg-secondary w-12 h-12 p-3 rounded-full text-xl" />
                <FaSearch className="text-accent bg-neutral hover:text-neutral hover:bg-secondary w-12 h-12 p-3 rounded-full text-xl" />
                </div>
            </div>
            <div className=" bottom-0 left-0 bg-neutral text-center bg-opacity-75 w-full p-4">
                <div className='flex text-secondary justify-center text-xl mb-2 mt-2 gap-1'> 
                    <TbStarFilled/>
                    <TbStarFilled/>
                    <TbStarFilled/>
                    <TbStarFilled/>
                    <FaRegStar />
                </div>
                <h2 className="text-accent text-lg">{product.title}</h2>
                <p className="text-secondary text-base">{product.price}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Products;
