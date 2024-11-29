import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-around items-center bg-red-700 text-white'>
        <li > <NavLink to="/">Main</NavLink></li>     
            <li> <NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">SignUp</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar