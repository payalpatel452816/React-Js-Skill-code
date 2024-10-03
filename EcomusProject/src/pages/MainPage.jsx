import React from "react"
import logo from "../assets/logo.svg";
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";

const MainPage = () => {
  return (
    <div className="flex justify-between items-center  text-center" >
      <div>
        <img className="h-16 w-48" src={logo} alt="" />
      </div>
      {/* MENU-BARS */}
      <div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/Product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/Pages">Pages</NavLink>
            </li>
            <li>
              <NavLink to="/Blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/BuyNow">BuyNow</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* ICONS */}
      <div className="flex text-xl gap-3">
      <FaSearch />
        <FaRegUser />
        <LuShoppingCart />
        <MdFavoriteBorder />
      </div>

    </div>
  );
};

export default MainPage;
