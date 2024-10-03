import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbars from '../componets/Navbars'
import Home from '../pages/Home'
import Aboutus from '../pages/Aboutus'
import OurMenu from '../pages/OurMenu'
import Jobs from '../pages/Jobs'


const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbars/>
        <Routes>
          {/* add your routes here */}
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/Aboutus" element={<Aboutus/>}></Route>
          <Route path="/Our Menu" element={<OurMenu/>}></Route>
          <Route path="/Jobs" element={<Jobs/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout