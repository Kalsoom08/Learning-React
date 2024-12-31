import React from 'react';
import './NavBar.css'; // Importing the CSS file

const NavBar = () => {
    const Nav = [
        {
            url: '/',
            title: 'All Products',
        },
        {
            url: '/categories',
            title: 'Categories',
        },
        {
            url: '/createPage',
            title: 'Create Page',
        },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {Nav.map((item, index) => (
                    <a key={index} href={item.url} className="navbar-link">
                        {item.title}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
