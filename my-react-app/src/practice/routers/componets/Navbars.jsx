import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiChessQueen } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useAuth0 } from '@auth0/auth0-react';

const Navbars = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-[#6F4E37] p-5 shadow-md'>
      <div className='flex items-center mb-4 md:mb-0'>
        <h1 className='text-white text-3xl mr-2'>MISS</h1>
        <GiChessQueen className='text-white text-3xl' />
        <h1 className='text-white text-3xl ml-2'>CAFE</h1>
      </div>

      <nav className='w-full md:w-auto'>
        <ul className='flex flex-col md:flex-row md:gap-8 text-white'>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>Home</NavLink></li>
          <li><NavLink to="/Aboutus" className={({ isActive }) => isActive ? "underline" : ""}>About Us</NavLink></li>
          <li><NavLink to="/OurMenu" className={({ isActive }) => isActive ? "underline" : ""}>Our Menu</NavLink></li>
          <li><NavLink to="/Jobs" className={({ isActive }) => isActive ? "underline" : ""}>Jobs</NavLink></li>
          <li><NavLink to="/Profile" className={({ isActive }) => isActive ? "underline" : ""}>User Profile</NavLink></li>

          {isAuthenticated ? (
            <div className='flex items-center'>
              <li>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Logout
                </button>
              </li>
              <li className='ml-2'>Welcome, {user.nickname}</li>
            </div>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </li>
          )}
        </ul>
      </nav>

      <div className='flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0'>
  <div className="flex gap-4 mb-4 md:mb-0">
    <NavLink to="/OrderNow">
      <button className="text-white hover:bg-red-700 transition duration-200 px-4 py-2 rounded-lg">
        OrderNow
      </button>
    </NavLink>
    <NavLink to="/top-coffee">
      <button className="text-white hover:bg-red-700 transition duration-200 px-4 py-2 rounded-lg">
        Explore Top Coffee
      </button>
    </NavLink>
  </div>
  
  <div className="flex gap-4">
    <NavLink to="/search" className="text-white hover:text-gray-300 transition duration-200">
      <CiSearch className='text-2xl' />
    </NavLink>
    <NavLink to="/user" className="text-white hover:text-gray-300 transition duration-200">
      <FaUser className='text-2xl' />
    </NavLink>
    <NavLink to="/cart" className="cart-icon relative flex items-center">
      <RiShoppingCart2Line className='text-2xl text-white' />
      <span className="absolute top-0 right-0 text-xs font-bold text-red-500">
        {localStorage.getItem('cartCount') || 0}
      </span>
    </NavLink>
  </div>
</div>

    </div>
  );
};

export default Navbars;
