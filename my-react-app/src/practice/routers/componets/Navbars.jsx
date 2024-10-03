import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GiChessQueen } from "react-icons/gi";

const Navbars = () => {
  return (
    <div className='flex items-center gap-10 bg-[#6F4E37] justify-around p-10 h-10 w-100'>
      <div>
        <button type="button" class="text-white hover:text-white border border-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Order Now</button>

      </div>
      <div>
        <nav>
          <ul className='flex  text-white gap-10 '>
            <li className='hover:underline'> <NavLink to="/">Home</NavLink></li>
            <li className='hover:underline'> <NavLink to="/Aboutus">Aboutus</NavLink></li>
            <div className='flex items-center '>
              <h1 className='text-white text-3xl mr-2'>MISS</h1>
              <GiChessQueen className='text-white text-3xl' />
              <h1 className='text-white text-3xl ml-2'>CAFE</h1>
            </div>
            <li className='hover:underline'> <NavLink to="/ContactUs">Cafe Menu</NavLink></li>
            
            <li className='hover:underline'> <NavLink to="/Services">Jobs</NavLink></li>
          </ul>
        </nav>
      </div>
      {/* icon */}
      <div className='flex gap-3 text-white'>
        <FaInstagram />
        <FaFacebookF />
        <FaTwitter />
      </div>
    </div>
  )
}

export default Navbars