import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
    const navLinks = [
        {
            url : '/',
            title : 'All'
        },

        {
            url : '/fullstack',
            title : 'FullStack'
        },

        {
            url : '/security',
            title : 'Security'
        },

        {
            url : '/career',
            title : 'Career'
        }
    ]
  return (
    <>
    <ul className='flex border justify-center items-center py-5 bg-blue-950 mb-24 text-white gap-3'>
        {navLinks.map((items,index)=>{
            return(
            <li className='px-2 flex py-1 rounded-lg hover:bg-blue-900'>
                <Link to={items.url}>{items.title}</Link>
            </li>
            )
            
})}
    </ul>
    </>
  )
}

export default NavBar