import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img9 from "../assets/shop-6.jpg";
import img10 from "../assets/electronic-7.jpg";
import img11 from "../assets/collection-72.jpg";
import img12 from "../assets/banner-collection-3.jpg";
import { MdSupportAgent } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";
import { GrCreditCard } from "react-icons/gr";
import { BsBox } from "react-icons/bs";
import Trendig from "../Components/Trendig";
import '../css/style.css';
import SliderShop from "../Components/SliderShop";
const Home = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="relative">
          <img src={img1} alt="" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 flex flex-col justify-start items-start text-center text-black  p-4 bg-gradient-to-t from-black via-transparent to-transparent">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
              UP TO 40% OFF CHARGERS AND MORE.
            </p>
            <h1 className="text-2l sm:text-3xl md:text-4xl lg:text-6xl my-10">
              Savings for <br /> dads and grads.
            </h1>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600 transition">
              Shop collection
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={img2} alt="" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 flex flex-col justify-start items-start text-center text-black p-4 bg-gradient-to-t from-black via-transparent to-transparent">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
              UP TO 40% OFF CHARGERS AND MORE.
            </p>
            <h1 className="text-2l sm:text-3xl md:text-4xl lg:text-6xl my-10">
              Modern design.
            </h1>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600 transition">
              Shop collection
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={img3} alt="" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 flex flex-col justify-start items-start text-center text-black p-4 bg-gradient-to-t from-black via-transparent to-transparent">
            <p className="text-xs sm:text-sm  my-6 md:text-base lg:text-lg">
              UP TO 40% OFF CHARGERS AND MORE.
            </p>
            <h1 className="text-2l sm:text-3xl md:text-4xl lg:text-6xl my-10">
              Fast charging.
            </h1>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600 transition">
              Shop collection
            </button>
          </div>
        </div>
      </Slider>
      <div>
</div>
{/* SHOP CATEGORY  */}
   <div>
    <SliderShop/>
   </div>
    {/* IMG WITH ADD */}
    <div className="relative m-20">
<img src={img12} alt="Sale Image" className="w-full h-auto object-cover" />
<div className="absolute inset-0 flex flex-col justify-start items-start my-20 text-center  p-8">
  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">SALE UP TO 30% OFF TODAY</h4>
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Best Deals Discounts</h1>
  <p className="text-lg text-white mb-6">Fast wireless charging on-the-go.</p>
  <button className="bg-lime-500 text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">Shop Now</button>
</div>
</div>
  {/* end this page */}
    {/* SOME PRODUCT */}
    <div className="demo">
      <div className="demo1">
        <img src={img9} alt="" />
        <h2>HOT ACCESSORIES</h2>
        <h1>Smart Assistant</h1>
        <button>Shop Now</button>
      </div>
      <div className="demo2">
        <img src={img10} alt=""  className=""/>
        <h2>FAST AND FREE SHIPPING</h2>
        <h1>True Earbuds</h1>
        <button>Shop Now</button>
      </div>
    </div>
    {/* ADD FOR SHOP */}
    <div className=" flex bg-lime-400 w-[100%] h-full  object-cover">
<div >
  <img src={img11} alt="Banner Image"  />
</div>
<div className="justify-center items-center text-center my-10">
  <h5 className="text-xs font-semibold uppercase tracking-wider text-black mb-2">ULTIMATE APPLE ACCESSORY.</h5>
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">60% Discount</h1>
  <p className="text-lg mb-4">Find the latest and greatest gadgets to enhance your electronic devices</p>
  <p className="text-lg font-medium mb-6">
    <b>Hurry up!</b> Deals end in:
  </p>
  <div className="flex justify-center  gap-4 mb-8">
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <span className="text-3xl font-bold block text-white text-center">00</span>
      <p className="text-sm font-semibold text-gray-300">Days</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <span className="text-3xl font-bold block  text-white text-center">00</span>
      <p className="text-sm font-semibold text-gray-300">Hours</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <span className="text-3xl font-bold block text-white text-center">00</span>
      <p className="text-sm font-semibold text-gray-300">Minutes</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <span className="text-3xl font-bold block text-white text-center">00</span>
      <p className="text-sm font-semibold text-gray-300">Seconds</p>
    </div>
  </div>
</div>
</div>
{/* END THIS PAGE CODE */}
{/* TRENDING SECTION */}
 <div>
  <Trendig/>
 </div>
 {/* BLOG POST */}
 
  

    {/* REVIEW PAGE */}
    {/* shiping infomation */}
    <div className="flex flex-wrap justify-between my-6 p-10 bg-gray-100 rounded-lg shadow-md">
<div className="flex-1 min-w-[150px] text-center p-4">
  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
<BsBox />
  </div>
     <h2 className="text-xl font-bold  text-gray-800">Free Shipping</h2>
  <p className="text-gray-600">Free shipping on orders over $120</p>
</div>
<div className="flex-1 min-w-[150px] text-center p-4">
  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
    
<GrCreditCard />
  </div>
  <h2 className="text-xl font-bold mb-2 text-gray-800">Flexible Payment</h2>
  <p className="text-gray-600">Pay with multiple credit cards</p>
</div>
<div className="flex-1 min-w-[150px] text-center p-4">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
  <MdSupportAgent />
  </div>
  <h2 className="text-xl font-bold mb-2 text-gray-800">Premium Support</h2>
  <p className="text-gray-600">Outstanding premium support</p>
</div>
<div className="flex-1 min-w-[150px] text-center p-4">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
<IoMdReturnLeft />
</div>
  <h2 className="text-xl font-bold mb-2 text-gray-800">14 Day Returns</h2>
  <p className="text-gray-600">Return within 30 days for an exchange</p>
</div>
</div>

    {/* End this  */}
    {/* FOOTER */}
    
  </div>
      
  );
};

export default Home;
