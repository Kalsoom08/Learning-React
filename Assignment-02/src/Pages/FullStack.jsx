import React from 'react'
import Img1 from '../assets/4.png'
import Img2 from '../assets/5.png'
import Img3 from '../assets/6.png'

const FullStack = () => {
 const products = [
     {
       "id": 1,
       "name": "Full Stack",
       "description": "Data science Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
       "Img": Img1
     },
     {
       "id": 2,
       "name": "Full Stack",
       "description": "Noise-canceling over-ear headphones with Bluetooth connectivity.",
       "Img": Img2
     },
     {
       "id": 3,
        "name": "Full Stack",
       "description": "Non-slip yoga mat with extra cushioning for added comfort.",
       "Img": Img3
     }
   ]
 
   return (
     <div className='flex flex-wrap justify-center'>
       {products.map(({ id, name, category, price, stock, description, Img }) => {
         return (
           <div className='flex justify-center items-center' key={id}>
             <div className="border border-black flex-col flex justify-center gap-2 m-5 w-[22rem] rounded-lg">
            
               <img src={Img} alt={name} className="w-full  rounded-t-lg h-52" />
               <h1 className='pl-4 text-[24px] '>{name}</h1>
               <h3 className='pl-4 text-[16px]'> {description}</h3>
             </div>
           </div>
         )
       })}
     </div>
   )
}

export default FullStack