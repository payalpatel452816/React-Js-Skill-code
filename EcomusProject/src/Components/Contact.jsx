import React from 'react'
import '../css/map.css'
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterBlack from './FooterBlack';

const Contact = () => {
  return (
    <div>
        <h1 className='banner text-3xl h-40'>
            Contact Us
        </h1>
         <section>
          <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2779928364903!2d-0.0785242243928155!3d51.50811571065234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTower%20of%20London!5e0!3m2!1sen!2sin!4v1729076996237!5m2!1sen!2sin" width="600" height="450" allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
         </section>
         <section>
         <div class=" bg-white flex my-10">
         <div className="max-w-2xl mx-auto">
    <h1 className="text-2xl  mb-4">Visit Our Store</h1>
    <div className="mb-6">
      <h2 className="text-lg font-semibold">Address</h2>
      <p className="text-gray-700">66 Mott St, New York, NY 10006, USA</p>
    </div>
    <div className="mb-6">
      <h2 className="text-lg font-semibold">Phone</h2>
      <p className="text-gray-700">(623) 934-2400</p>
    </div>
    <div className="mb-6">
      <h2 className="text-lg font-semibold">Email</h2>
      <p className="text-gray-700">EComposer@example.com</p>
    </div>
    <div className="mb-6">
      <h2 className="text-lg font-semibold">Open Time</h2>
      <p className="text-gray-700">
        Our store has re-opened for shopping, <br/><br/> exchange every day from 11 AM to 7 PM.
      </p>
    </div>
    <div className='flex '>
          <FaFacebookF  className=' h-10 w-10 p-3 m-1 '/>
          <FaXTwitter className=' h-10 w-10 p-3  m-1 ' />
          <FaInstagramSquare className=' h-10 w-10 p-3 m-1' />
          <FaTiktok  className=' h-10 w-10 p-3  m-1 '/>
          <FaPinterest className=' h-10 w-10 p-3  m-1 ' />
          </div>
  </div>
  <form class="px-6 pb-24 sm:pb-32 lg:px-8">
  <h1 class="text-2xl mb-4">Get in Touch</h1>
  <p>If you’ve got great products you’re making or looking to work with us, then drop us a line.</p>
  <div class="mx-auto max-w-xl lg:max-w-lg">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
        <div class="mt-2.5">
          <input type="text" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="firstName" required />
        </div>
      </div>
      <div>
        <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div class="mt-2.5">
          <input type="text" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="lastName" required />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div class="mt-2.5">
          <input type="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="email" required />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div class="mt-2.5">
          <textarea id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="message" required></textarea>
        </div>
      </div>
    </div>
    <div class="mt-8 flex justify-end">
      <button type="submit" class=" w-full border-2 border-black bg-black px-5 py-1.5 text-sm font-semibold text-white transition-colors duration-150 ease-in-out  ">Send message</button>
    </div>
  </div>
</form>

</div>
         </section>
         <div>
         <hr className="border-t border-gray-300 my-4" />
         </div>
        <section>
          <FooterBlack/>
        </section>

    </div>
  )
}

export default Contact  