import React from 'react'
import logo from "../assets/logo.svg";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        {/* FOOTER */}
    <div class="bg-gray-600">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6  text-white flex flex-wrap justify-between">
        <div class="p-5">
          <div>
            {" "}
            <img src={logo} alt=""/>
          </div>
          <a class="my-3 block" href="/#">
            Address: 1234 Fashion Street, Suite 567,{" "}
            <span class="text-teal-600 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            New York, NY 10001 <span class="text-teal-600 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            Email: info@fashionshop.com{" "}
            <span class="text-teal-600 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            Phone: (212) 555-1234{" "}
            <span class="text-teal-600 text-xs p-1"></span>
          </a>
          <div className='flex '>
          <FaFacebookF  className=' h-10 w-10 p-3 m-1 border rounded-full bg-gray-600'/>
          <FaXTwitter className=' h-10 w-10 p-3 border m-1 rounded-full bg-gray-600' />
          <FaInstagramSquare className=' h-10 w-10 p-3 border m-1 rounded-full bg-gray-600' />
          <FaTiktok  className=' h-10 w-10 p-3 border m-1 rounded-full bg-gray-600'/>
          <FaPinterest className=' h-10 w-10 p-3 border m-1  rounded-full bg-gray-600' />
          </div>
        </div>
        <div class="p-5">
          <div class="text-xs uppercase text-white font-medium">Help</div>

          <a class="my-3 block" href="/#">
            Privacy Policy <span class="text-teal-600  hover:text-red-500 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            {" "}
            Returns + Exchanges<span class="text-teal-600 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            Shipping <span class="text-teal-600 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            Terms & Conditions
            <span class="text-teal-600 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            FAQ’s<span class="text-teal-600 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            Compare <span class="text-teal-600 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            My Wishlist <span class="text-teal-600 text-xs p-1"></span>
          </a>
        </div>
        <div class="p-5">
          <div class="text-xs uppercase text-gray-500 font-medium">
            About Us
          </div>

          <a class="my-3 block" href="/#">
            Our Story<span class="text-teal-600 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            Visit Our Store <span class="text-teal-600 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            Contact Us <span class="text-teal-600 text-xs p-1"></span>
          </a>
          <a class="my-3 block" href="/#">
            Account <span class="text-teal-600 text-xs p-1"></span>
          </a>
        </div>
        <div class="p-5">
          <div class="text-xs uppercase text-gray-500 font-medium">
            Sign Up With Email
          </div>
          <div class="">
            Sign up to get first dibs on new arrivals,
            <br /> sales, exclusive content,events and more!
          </div>

          <form class="max-w-md mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Enter Your Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-6 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-[300px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Email"
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 dark:bg-blackdark:hover:bg-blue-700 dark:focus:ring-black"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer