import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbars from '../componets/Navbars'
import Home from '../pages/Home'
import Aboutus from '../pages/Aboutus'
import OurMenu from '../pages/OurMenu'
import Jobs from '../pages/Jobs'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import TopCoffee from '../componets/TopCoffee'
import OrderNow from '../componets/OrderNow'
import ContactUs from '../componets/ContactUs'


const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbars/>
        <Routes>
          {/* add your routes here */}
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/Aboutus" element={<Aboutus/>}></Route>
          <Route path="/OurMenu" element={<OurMenu/>}></Route>
          <Route path="/Jobs" element={<Jobs/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
          <Route path="/top-coffee" element={<TopCoffee />}></Route>
          <Route path="/ContactUs" element={<ContactUs/>}></Route>
          <Route path="/OrderNow" element={<OrderNow />}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default Layout