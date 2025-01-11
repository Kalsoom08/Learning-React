import React, { useState } from 'react';
import Image1 from '../../assets/cc2.png';
import Image2 from '../../assets/cc3.png';
import Image3 from '../../assets/cc5.png';
import Image4 from '../../assets/cc6.png';
import Image5 from '../../assets/cc8.png';
import Image6 from '../../assets/cc4.png';
import Image7 from '../../assets/cc16.png';
import Image8 from '../../assets/ss1.png';
import Image9 from '../../assets/ss2.png';
import Image10 from '../../assets/ss3.png';
import { CiZoomIn, CiShoppingCart, CiHeart } from 'react-icons/ci';

const LatestProducts = () => {
  const [filter, setFilter] = useState('New Arrival'); 

  const productItem = [
   
    { id: 1, name: 'Stylish Chair', price: '$120', oldPrice: '$150', img: Image1, category: 'New Arrival' },
    { id: 2, name: 'Elegant Sofa', price: '$300', oldPrice: '$350', img: Image2, category: 'New Arrival' },
    { id: 3, name: 'Wooden ', price: '$220', oldPrice: '$280', img: Image3, category: 'New Arrival' },
    { id: 4, name: 'Modern Chair', price: '$180', oldPrice: '$220', img: Image4, category: 'New Arrival' },
    { id: 5, name: 'Lounge Sofa', price: '$450', oldPrice: '$500', img: Image5, category: 'New Arrival' },
    { id: 6, name: 'Classic Sofa', price: '$250', oldPrice: '$300', img: Image6, category: 'New Arrival' },

    { id: 7, name: 'Comfort Sofa', price: '$400', oldPrice: '$450', img: Image8, category: 'Best Seller' },
    { id: 8, name: 'Luxury Desk', price: '$550', oldPrice: '$600', img: Image9, category: 'Best Seller' },
    { id: 9, name: 'Modern Lamp', price: '$320', oldPrice: '$370', img: Image10, category: 'Best Seller' },


    { id: 10, name: 'Glass Table', price: '$500', oldPrice: '$600', img: Image7, category: 'Featured' },
    { id: 11, name: 'Leather Sofa', price: '$650', oldPrice: '$750', img: Image1, category: 'Featured' },
    { id: 12, name: 'Fabric Chair', price: '$230', oldPrice: '$300', img: Image2, category: 'Featured' },

   
    { id: 13, name: 'Office Desk', price: '$350', oldPrice: '$450', img: Image3, category: 'Special Offer' },
    { id: 14, name: 'Lounge Chair', price: '$280', oldPrice: '$350', img: Image4, category: 'Special Offer' },
    { id: 15, name: 'Night Lamp', price: '$180', oldPrice: '$250', img: Image5, category: 'Special Offer' },
  ];

  const filteredProducts =
    filter === 'New Arrival'
      ? productItem.filter((product) => product.category === 'New Arrival') 
      : productItem.filter((product) => product.category === filter); 

  const splitNewArrivalProducts = (products) => {
    if (filter === 'New Arrival') {
      const firstRow = products.slice(0, 3);
      const secondRow = products.slice(3, 6);
      return [firstRow, secondRow];
    }
    return [products];
  };

  const productRows = splitNewArrivalProducts(filteredProducts);

  return (
    <div className="bg-gray-50 py-10">
      <h1 className="text-[#016069] text-center text-2xl font-bold mb-6">
        Latest Products
      </h1>
      <div className="flex justify-center gap-10 mb-10 mt-5">
        {['New Arrival', 'Best Seller', 'Featured', 'Special Offer'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)} 
            className={`text-[#016069] hover:underline hover:text-[#ed7070] ${
              filter === category ? 'font-bold underline text-[#ed7070]' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-col lg:flex-col justify-center gap-12 lg:gap-16">
        {productRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-8">
            {row.map((product) => (
              <div
                key={product.id}
                className="group bg-[#dde6da] flex flex-col items-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-out p-4 w-[15rem]"
              >
                <div className="relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-[12rem] h-[12rem] object-cover rounded-t-lg bg-white"
                  />
                  <div className="absolute inset-0 flex justify-center items-center gap-4 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out text-white invisible group-hover:visible">
                    <CiShoppingCart className="text-2xl hover:text-amber-400 cursor-pointer" />
                    <CiHeart className="text-2xl hover:text-red-500 cursor-pointer" />
                    <CiZoomIn className="text-2xl hover:text-blue-400 cursor-pointer" />
                  </div>
                </div>

                <div className="mt-4 flex flex-col items-center text-center">
                  <p className="text-lg font-medium text-[#016069]">{product.name}</p>
                  <div className="flex items-center gap-2 text-sm mt-2">
                    <span className="text-[#016079] font-semibold">{product.price}</span>
                    <del className="text-red-400">{product.oldPrice}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
