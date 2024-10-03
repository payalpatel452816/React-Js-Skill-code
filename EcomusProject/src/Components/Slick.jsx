import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../project/assets/image1.jpg";
import img2 from "../project/assets/image2.jpg";
import img3 from "../project/assets/image3.jpg";
import './style.css'
const Slick = () => {
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
    </div>
  );
};

export default Slick;
