import React from 'react'
import Image1 from '../../src/assets/WishList/Imag1.png'
import Image2 from '../../src/assets/WishList/Imag2.png'
import Image3 from '../../src/assets/WishList/Imag3.png'
import Image4 from '../../src/assets/WishList/Imag4.png'
import Image5 from '../../src/assets/WishList/Imag5.png'
import Image6 from '../../src/assets/WishList/Imag6.png'
import Image7 from '../../src/assets/WishList/Imag7.png'
import { CiZoomIn, CiShoppingCart, CiHeart } from 'react-icons/ci';

const WishList = () => {
  const wishItem = [
    {
      key: 1,
      Img: Image1,
      title: 'Lorem Ispum',
      newPrice: '$26.00',
      oldPrice: '$40.00',
      details: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, incidunt!'
    },
    {
      key: 2,
      Img: Image2,
      title: 'Lorem Ispum',
      newPrice: '$26.00',
      oldPrice: '$40.00',
      details: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, incidunt!'
    },
    {
      key: 3,
      Img: Image3,
      title: 'Lorem Ispum',
      newPrice: '$26.00',
      oldPrice: '$40.00',
      details: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, incidunt!'
    },
    {
      key: 4,
      Img: Image4,
      title: 'Lorem Ispum',
      newPrice: '$26.00',
      oldPrice: '$40.00',
      details: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, incidunt!'
    },
    {
      key: 5,
      Img: Image5,
      title: 'Lorem Ispum',
      newPrice: '$26.00',
      oldPrice: '$40.00',
      details: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, incidunt!'
    },
    {
      key: 6,
      Img: Image6,
      title: 'Lorem Ispum',
      newPrice: '$26.00',
      oldPrice: '$40.00',
      details: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, incidunt!'
    },
    {
      key: 7,
      Img: Image7,
      title: 'Lorem Ispum',
      newPrice: '$26.00',
      oldPrice: '$40.00',
      details: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, incidunt!'
    }
  ]
  return (
    
      <div>
        <h1 className='text-[#101750] text-[2rem] font-bold'> WishList</h1>
        <div className="flex flex-col items-center justify-center bg-[#F5F5F5] py-3 px-4 gap-4 rounded-md">
  <div className="text-[#111C85] text-[1rem] font-semibold text-center">
    Ecommerce Accessories & Fashion Items
  </div>
  <div className="text-gray-500 text-sm text-center">
    About 9,620 results (0.62 seconds)
  </div>
  <div className="flex gap-4 items-center justify-center">
    <div>
      <label className="text-gray-700 text-sm mr-2" htmlFor="per-page">
        Per Page:
      </label>
      <select id="per-page" className="border border-gray-300 rounded-md p-1">
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>
    <div>
      <label className="text-gray-700 text-sm mr-2" htmlFor="sort">
        Sort By:
      </label>
      <select id="sort" className="border border-gray-300 rounded-md p-1">
        <option>Best Match</option>
        <option>Price Low to High</option>
        <option>Price High to Low</option>
      </select>
    </div>
    <div>
      <label className="text-gray-700 text-sm mr-2" htmlFor="view">
        View:
      </label>
      <button className="border border-gray-300 rounded-md p-2">
        <CiZoomIn />
      </button>
    </div>
  </div>
</div>

      <div className='flex flex-col justify-center items-center gap-10 mt-20'>
          {wishItem.map((item) => {
            return (
              <div key={item.key} className='flex justify-center items-center  w-[40rem] gap-7'>
                <div>
                  <img src={item.Img} alt="" />
                </div>
                <div>
                  <h1 className='text-[#111C85] text-[1.2rem] font-semibold pb-2'>{item.title}</h1>
                  <div className='flex gap-5'>
                    <p className='text-[#111C85] pb-1'>{item.newPrice}</p>
                    <del className='text-rose-600'>{item.oldPrice}</del>
                  </div>
                  <p className='text-[.9rem] text-gray-500'>{item.details}</p>
                  <div className='flex gap-5 mt-4 text-[#535399]'>
                    <CiShoppingCart />
                    <CiHeart />
                    <CiZoomIn />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default WishList
