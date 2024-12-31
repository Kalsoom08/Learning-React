import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CategoryPro.css';

const CategoryProduct = () => {
    const { prodID } = useParams();
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchCategory = async (id) => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);
            const data = await response.json();
            setCategory(data);
        } catch (error) {
            console.error('Error fetching category:', error);
        }
    };

    const fetchProducts = async (id) => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
            
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteCategory = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this category?');
        if (!confirmDelete) return;

        
            await fetch(`https://api.escuelajs.co/api/v1/categories/${prodID}`, 
            { method: 'DELETE' });
            alert('Category deleted successfully.');
            navigate('/');
        
    };

    useEffect(() => {
        fetchCategory(prodID);
        fetchProducts(prodID);
    }, [prodID]);

    if (loading) return <p>Loading category and products...</p>;

    if (!category) return <p>Category not found.</p>;

    return (
        <div className="category-product-container">
            <div className='innerDiv'>
            <h2 className='bg-black'>Products in this Category</h2>
            <button className="delete-button" onClick={handleDeleteCategory}>
                    Delete Category
                </button>
            </div>
            
            
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.images[0]} alt={product.title} className="product-image" />
                        <p className="product-title">{product.title}</p>
                        <p className="product-price">${product.price}</p>
                        <p>
                    <span>Created At:</span> {category.creationAt}
                </p>
                <p>
                    <span>Updated At:</span> {category.updatedAt}
                </p>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryProduct;
