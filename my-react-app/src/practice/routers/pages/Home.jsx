// src/HomePage.js
import React from 'react';
import './page.css'; // Optional: For styling
import Aboutus from './Aboutus';
import Footer from '../componets/Footer';
import FeaturedProducts from '../componets/FeaturedProducts';
import banner from '../pages/img/hero-bnner.jpg'
const Home = () => {
  return (
    <div>
      <img src={banner} alt="Coffee Banner" className="banner-image" />
      <div className="banner-content"> 
        <h1>Welcome to Our Coffee Shop</h1>
        <p>Your favorite place for the finest coffee and delicious pastries!</p>
        <button className="shop-now-button">Shop Now</button>
      </div>
  
      
       <section>
        <FeaturedProducts/>
       </section>
      

      <section className="about">
        <Aboutus/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default Home;
