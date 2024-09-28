import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllImport from './project/AllImport'
import Slick from './project/Slick'
import WishList from './project/WishList'
import Trendig from './project/Trendig'
import Login from './project/Login'
import CheckOut from './project/CheckOut'
import BlogPost from './project/BlogPost'
import Shop from './project/Shop'
import Main from './task/Main'
import Import from './practice/hook/Import'
import Curd from './task/Curd'
import Product from './project/Product'
import Review from './project/Review'
import SliderShop from './project/SliderShop'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Main/> */}
      {/* <WishList/> */}
      <AllImport/>
      {/* <Slick/> */}
      {/* <Trendig/> */}
      {/* <Login/>
      <CheckOut/> */}
      {/* <BlogPost/> */}
      {/* <Shop/> */}
      {/* <Import/> */}
      {/* <Curd/> */}
      {/* <Product/> */}
      {/* <Review/> */}
      {/* <SliderShop/> */}
     

    </>
  )
}

export default App
