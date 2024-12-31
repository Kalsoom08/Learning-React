import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  const navLinks = [
    {
      url : '/',
      title : 'Home'
    },
    {
      url : '/products',
      title : 'Products'
    },
    {
      url : '/login',
      title : 'Login'
    },
    {
      url : '/signup',
      title : 'SignUp'
    },

  ]
  return (
    // <ul className='flex border justify-center items-center py-6 px-2 bg-slate-500 text-white'>
    //     <li className='mx-5 border px-5 py-2 hover:bg-white hover:text-slate-500 rounded-md font-bold'>
    //      <Link to='/'>Home</Link>
    //     </li>
    //     <li className='mx-5 border px-5 py-2 hover:bg-white hover:text-slate-500 rounded-md font-bold'>
    //      <Link to='/products'>Products</Link>
    //     </li>
    //     <li className='mx-5 border px-5 py-2 hover:bg-white hover:text-slate-500 rounded-md font-bold'>
    //      <Link to='/login'>Login</Link>
    //     </li>
    //     <li className='mx-5 border px-5 py-2 hover:bg-white hover:text-slate-500 rounded-md font-bold'>
    //      <Link to='/signup'>SignUp</Link>
    //     </li>
    //     </ul>

    <>
    <ul className="flex border justify-center items-center py-5 bg-green-600 text-white gap-3">
      
        {navLinks.map((items, index)=>(
          
          <li  className="px-2 py-1 rounded-lg hover:bg-green-400 hover:text-green-900">
            <Link to={items.url}>{items.title}</Link>
            </li>
        ))
        }
       
    </ul>
    </>
  )
}
