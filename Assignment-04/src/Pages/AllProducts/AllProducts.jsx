import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllProducts.css'
import {Link} from 'react-router-dom'

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
  
      const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
      console.log(data);
      setProducts(data);
   
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='outer'>
    <h1>All Products</h1>
    <div className='main-div'>
    
     
        {products?.map((product) =>(
        <div className='inner-div'>
            <img src={product.images} alt="" />
            <h4 key={product.id}>{product.title}</h4>
            <Link to={`/product/${product.id}`}>Product Detail</Link>
        </div>

        )
      )}
      
    </div>
    </div>
  );
};

export default AllProducts;
