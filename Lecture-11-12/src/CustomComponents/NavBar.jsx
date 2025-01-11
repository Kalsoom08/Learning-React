import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart, CiSearch, CiHeart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from '../assets/Imag2.png';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((prevState) => !prevState);
    };

    const Nav = [
        { path: '/', title: 'Home' },
        { path: '/product', title: 'Product' },
        { path: '/contact', title: 'Contact' },
        { path: '/signup', title: 'SignUp' },
    ];

    return (
        <div className="bg-[#016069] text-white h-[3rem] lg:h-[5rem] flex items-center justify-between px-4 lg:px-10 w-full relative">
            <div className="flex gap-10 items-center w-[60%] justify-between">
                <img src={Image} alt="Logo" className="w-[30%] lg:w-[20%]" />
                <ul className="hidden lg:flex gap-4">
                    {Nav.map((item, index) => (
                        <li key={index} className="text-[1.2rem] font-semibold hover:border-b border-[#A5A51E] w-[5.5rem] h-[2rem] px-1 flex justify-center items-center rounded-[5px]">
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-3">
                <div className="hidden lg:flex border border-white items-center lg:px-2 lg:py-1 rounded-[5px]">
                    <label htmlFor="search">
                        <CiSearch className="text-[1.3rem] lg:text-[1.5rem]" />
                    </label>
                    <input type="text" id="search" name="search" className="bg-transparent  focus:outline-none pl-1" placeholder="Search..." />
                </div>

                <Link to="/wishlist"><CiHeart className="text-[1.3rem] lg:text-[1.5rem]" /></Link>
                <Link to='/cart'><CiShoppingCart className="text-[1.3rem] lg:text-[1.5rem]" /></Link>
                <GiHamburgerMenu className="lg:hidden" onClick={handleToggle} />
            </div>

            {/* Mobile Menu */}
            <ul
                className={`${
                    toggle ? "flex" : "hidden"
                } flex-col items-center py-5 bg-[#f2f0ff] lg:hidden gap-4 w-full absolute top-[3rem] left-0 z-50 shadow-lg`}
            >
                <li>
                    <div className="flex border border-black items-center lg:px-2 lg:py-1 rounded-[5px]">
                        <label htmlFor="search">
                            <CiSearch className="text-[1.3rem] lg:text-[1.5rem]" />
                        </label>
                        <input type="text" id="search" name="search" className="bg-transparent focus:outline-none pl-1" placeholder="Search..." />
                    </div>
                </li>
                {Nav.map((item, index) => (
                    <li key={index} className="text-[1.2rem] font-semibold hover:border text-black border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]">
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavBar;
