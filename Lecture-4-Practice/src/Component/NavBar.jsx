import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navBar = [
        {
            url : "/",
            title: "Home",
        },
        {
            url : "/about",
            title: "About",
        },
        {
            url : "/projects",
            title: "Projects",
        },
        {
            url : "/services",
            title: "Services",
        },
        {
            url: "/contact",
            title:"Contact",
        }
        

    ]
  return (
    <div>
        <ul className='flex justify-center  bg-green-800 text-white'>
            {
                navBar.map((item, index)=>{
                    return (
                        <li className='px-10 py-5 '>
                            <Link className='text-[18px] hover:border-b border-white rounded-lg px-2 py-1'
                            to={item.url} 
                            >{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
        
    </div>
  )
}

export default NavBar