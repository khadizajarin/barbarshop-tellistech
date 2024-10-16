import React from 'react';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { GrBasket } from 'react-icons/gr';

const Products = () => {
  const products = [
    { id: 1, title: "New Fresh Wash", bigImage: 'https://html.themeori.net/barbex/assets/img/products/products-1.jpg', price: "$51.39" },
    { id: 2, title: "New Fresh Wash", bigImage: 'https://html.themeori.net/barbex/assets/img/products/products-2.jpg', price: "$56.00" },
    { id: 3, title: "New Fresh Wash", bigImage: 'https://html.themeori.net/barbex/assets/img/products/products-3.jpg', price: "$63.87" },
    { id: 4, title: "New Fresh Wash", bigImage: 'https://html.themeori.net/barbex/assets/img/products/products-4.jpg', price: "$47.89" },
  ];

  return (
    <div className='bg-neutral'>
        {/* HeadLine */}
      <p className="text-base text-secondary mb-2 text-center lg:pt-56 pt-20">Our Products</p>
      <h1 className="text-4xl lg:text-6xl font-extralight text-accent mb-10  text-center px-8">Evoke the experience of one of our  <br /> barber shops</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center lg:p-20 p-10">
        {products.map((product) => (
            <div key={product.id} className="relative group">
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
