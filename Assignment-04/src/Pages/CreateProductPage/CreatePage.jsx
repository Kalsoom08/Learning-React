import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreatePage.css';


const CreatePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    categoryId: '',
    image: '', 
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { title, price, description, categoryId, image } = formData;
    if (!title || !price || !description || !categoryId || !image) {
      setError('Please fill all fields.');
      return;
    }

    try {
      await axios.post('https://api.escuelajs.co/api/v1/products/', {
        title,
        price: parseFloat(price),
        description,
        categoryId: parseInt(categoryId),
        images: [image],
      });
      alert('Product created successfully!');
      navigate('/products');
    } catch (err) {
      setError('Failed to create product.');
    }
  };

  return (
    <div className='page'>
    <div className="create-page-container">
      <h1>Create New Product</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="create-product-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Category ID:</label>
          <input
            type="number"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
          {formData.image && <img src={formData.image} alt="img-preview" className="image-preview" />}
        </div>
        <button type="submit" className="submit-button">Create Product</button>
      </form>
    </div>
    </div>
  );
};

export default CreatePage;
