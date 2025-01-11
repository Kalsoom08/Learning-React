import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

const ShopexOffer = () => {
  const shopex = [
    {
        img : logo1,
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quae!'
    },
    {
        img : logo2,
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quae!'
    },
    {
        img : logo3,
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quae!'
    },
    {
        img : logo4,
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quae!'
    },
  ]
  return (
    <div>
    <div>
        <h1 className='text-[#016069] text-center text-[1.6rem] font-semibold mt-[2rem] mb-[3rem]'>What Shopex Offer!</h1>
        <div className='flex flex-wrap justify-center gap-4 md:gap-10 lg:gap-14'>
            {
                shopex.map((item, index) => {
                   return (
                    <div key={index} className='w-[4rem] md:w-[7rem] lg:w-[10rem] flex flex-col items-center gap-3'>
                         <img className='w-[1.3rem] md:w-[2rem] lg:w-[3rem]'
                         src={item.img} />
                         <h1 className='text-[#016069] text-[.4rem] md:text-[.6rem] lg:font-bold'>{item.title}</h1>
                         <p className='text-gray-500 text-center text-[.3rem] md:text-[.5rem] lg:text-[.7rem]'>{item.description}</p>
                    </div>
                   )
                })
            }
        </div>
    </div>
</div>


  )
}

export default ShopexOffer