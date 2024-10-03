import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import Pages from "./Pages";
import Blog from "./Blog";
import BuyNow from "./BuyNow";
import Login from "./Login";
import MainPage from "./MainPage";

const AllImport = () => {
  return (
    <div>
      <BrowserRouter>
        <MainPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BuyNow" element={<BuyNow />} />
          {/* <Route path="/Login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllImport;
