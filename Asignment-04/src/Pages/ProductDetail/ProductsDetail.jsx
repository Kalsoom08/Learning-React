import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductsDetail.css';

const ProductsDetail = () => {
  const { detailID } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const fetchProduct = async (id) => {
    try {
      const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleDeleteCategory = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://api.escuelajs.co/api/v1/products/${detailID}`);
      alert('Product deleted successfully.');
      navigate('/'); 
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
    }
  };

  useEffect(() => {
    fetchProduct(detailID);
  }, [detailID]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1 className="product-title">{product.title}</h1>
      <div className='descBox'> 
      <div className='imag'>
      <img className="product-image" src={product.images[0]} alt={product.title} />
      
      </div>
      <div className='data'>
      <p className="product-description">{product.description}</p>
      <b className="product-price">${product.price}</b>
      <button className="delete-button" onClick={handleDeleteCategory}>
        Delete Product
      </button>
      </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
