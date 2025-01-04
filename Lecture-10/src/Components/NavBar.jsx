import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const Nav = [
    {
      url: '/',
      name: 'SignUp',
    },
    {
      url: '/all-users',
      name: 'All Users',
    },
  ];

  return (
    <nav className="bg-[rgba(0,0,0,0.7)] text-white p-4 shadow-md">
      <ul className="flex gap-6 justify-center">
        {Nav.map((item, index) => (
          <li key={index}>
            <Link
              to={item.url}
              className="text-lg hover:text-[#99B898] transition duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
