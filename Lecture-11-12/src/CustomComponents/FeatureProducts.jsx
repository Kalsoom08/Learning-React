import React from 'react';
import { Button } from '@/Components/ui/button';
import Image1 from '../assets/c17.png';
import Image2 from '../assets/c11.png';
import Image3 from '../assets/c13.png';
import Image4 from '../assets/c10.png';
import { CiZoomIn, CiShoppingCart, CiHeart } from 'react-icons/ci';

const FeatureProducts = () => {
   let Products = [
      {
        id: 1,
        name: "Centilever Chair",
        code: "CC1",
        price: '$100',
        img: Image1
      },
      {
        id: 2,
        name: "Centilever Chair",
        code: "CC1",
        price: '$200',
        img: Image2
      },
      {
        id: 3,
        name: "Centilever Chair",
        code: "CC1",
        price: '$300',
        img: Image3
      },
      {
        id: 4,
        name: "Centilever Chair",
        code: "CC1",
        price: '$300',
        img: Image4
      }
    ];

  return (
    <div className="mb-20 px-4 lg:px-20">
      <h1 className='text-[#016069] text-center text-[1.8rem] font-bold mt-[2rem] mb-6'>Featured Products</h1>
      <div className='flex justify-center flex-wrap gap-10 align-middle mt-10 lg:gap-8'>
  
        {Products.map((product) => {
          return (
            <div 
              key={product.id} 
              className='bg-[#dde6da] group hover:shadow-lg hover:border border-gray-200 rounded-lg flex flex-col items-center w-[13rem] h-[18rem] transition-transform duration-300 ease-out hover:scale-105'>
              <div className='relative w-[12rem] h-[12rem] overflow-hidden'>
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className='w-full h-full mt-3 object-contain transition-opacity duration-300 ease-in-out ' 
                />
                <div className='absolute mt-2 inset-0 flex justify-start gap-2  group-hover:opacity-100 transition-opacity duration-300 ease-in-out '>
                  <CiShoppingCart className='text-[#3b5b3b] invisible text-base cursor-pointer group-hover:visible hover:scale-110 transition-transform duration-200 ease-out'/>
                  <CiHeart className='text-[#3b5b3b] invisible text-base cursor-pointer group-hover:visible hover:scale-110 transition-transform duration-200 ease-out'/>
                  <CiZoomIn className='text-[#3b5b3b] invisible text-base cursor-pointer group-hover:visible hover:scale-110 transition-transform duration-200 ease-out'/>
                </div>
              </div>
              <Button 
                className='mt-2 hidden group-hover:block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-[#5a9f9a] transition-colors duration-300 ease-out'>
                View Details
              </Button>
              <div 
                className='bg-[#dde6da]  mt-2 flex flex-col items-center w-full h-[7rem] px-4 py-2 group-hover:bg-[#2f1ac4] group-hover:text-[white]
                  transition-all duration-300 ease-out'>
                <h2 className='font-semibold text-lg text-[#c94c61] group-hover:text-[white]'>{product.name}</h2>
                <p className='text-sm'>Code - {product.code}</p>
                <p className='font-bold text-md'>{product.price}</p>
              </div>

              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
