import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTshirt, FaLaptop, FaAppleAlt, FaCouch, FaBicycle, FaShoePrints, FaQuestion } from 'react-icons/fa';
import './Category.css'; 

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
       
            const response = await fetch('https://api.escuelajs.co/api/v1/categories');
            const data = await response.json();
            setCategories(data);
        
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const getCategoryIcon = (categoryName) => {
        const icons = {
            Clothes: <FaTshirt size={40} color="#716981" />,
            Electronics: <FaLaptop size={40} color="#716981" />,
            Groceries: <FaAppleAlt size={40} color="#716981" />,
            Furniture: <FaCouch size={40} color="#716981" />,
            Cycle: <FaBicycle size={40} color="#716981" />,
            Shoes: <FaShoePrints size={40} color="#716981" />,
            Miscellaneous: <FaBicycle size={40} color="#716981" />,
        };
        return icons[categoryName] || <FaQuestion size={40} color="#716981" />;
    };

    if (categories.length === 0) return <p>Loading categories...</p>;

    return (
        <div className="categories-container">
            {categories.map((cat) => (
                <div key={cat.id} className="category-card">
                    {getCategoryIcon(cat.name)}
                    <h3 className="category-title">{cat.name}</h3>
                    <Link className="category-link" to={`/categoryProduct/${cat.id}`}>
                        Explore Category
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Categories;
