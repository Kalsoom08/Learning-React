import React from 'react'
import { Link } from 'react-router-dom'
import { ProductDetail } from './ProductDetail'

export const ProductPage = () => {
  const products = [
    {
      "id": 1,
      "name": "Wireless Mouse",
      "category": "Electronics",
      "price": 29.99,
      "stock": 120,
      "description": "A comfortable and responsive wireless mouse with ergonomic design."
    },
    {
      "id": 2,
      "name": "Bluetooth Headphones",
      "category": "Audio",
      "price": 79.99,
      "stock": 50,
      "description": "Noise-canceling over-ear headphones with Bluetooth connectivity."
    },
    {
      "id": 3,
      "name": "Yoga Mat",
      "category": "Fitness",
      "price": 24.99,
      "stock": 200,
      "description": "Non-slip yoga mat with extra cushioning for added comfort."
    },
    {
      "id": 4,
      "name": "Smartphone",
      "category": "Electronics",
      "price": 699.99,
      "stock": 30,
      "description": "Latest model smartphone with a powerful processor and high-resolution camera."
    },
    {
      "id": 5,
      "name": "Coffee Maker",
      "category": "Kitchen Appliances",
      "price": 49.99,
      "stock": 85,
      "description": "Programmable coffee maker with a 12-cup capacity."
    }
  ]

  
  return (
   <div>
    {products.map(({id,name,category,price,stock,description})=>{
      return(
        <div className='flex justify-center items-center'>
        <div className="border border-black flex-col flex justify-center  gap-2 m-5  w-[30rem] rounded-lg">
           <b>Item: {id}</b>
           <h1>Name: {name}</h1>
           <h3>Category: {category}</h3>
           <em>Price: {price}</em>
           <em>Stock: {stock}</em>
           <p>Description: {description}</p>
           <Link
                    to={`/product-detail/${id}`}
                    className="border p-2 rounded-lg bg-green-600 text-white "
                  >
                    Product Details
                  </Link>
        </div>
        
        </div>
      )
      
    })}
   </div>
   
  )
}
