import React from 'react'
import img1 from'../assets/product1.jpg';
import { BsFillLightningChargeFill } from "react-icons/bs";


const Product = () => {
  return (
    <div className='container'>
      <div className='xzoom-container'>
        <img src={img1} alt=''/>
      </div>
      <div className='decription'>
         <h1>Cotton jersey top</h1>
         <div className='best'>
         <p>Best Seller</p>
         <p><BsFillLightningChargeFill />Selling fast! 56 people have this in their carts.</p>
         </div>
         <div className='flex'>
         <p>$8.00</p>
         <p>$30.00</p>
         <p>20% OFF</p>
         </div>
         
      </div>
    </div>
  )
}

export default Product