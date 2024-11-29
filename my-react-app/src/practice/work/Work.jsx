import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main'
import Login from './Login'
import SignUp from './SignUp'

const Work = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Main/>} ></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default Work