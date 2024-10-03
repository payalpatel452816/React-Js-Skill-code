import React from 'react'
import img1 from "../assets/shop-1.jpg";
import img2 from "../assets/shop-2.jpg";
import img3 from "../assets/shop-3.jpg";
import img4 from "../assets/shop-4.png";
import img5 from "../assets/shop-5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderShop = () => {
    const settings2 = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <h1 className='text-3xl'>Shop by category.</h1>
            <div className='mx-6  py-10'>
                <Slider {...settings2}>
                    <div className='relative'>
                        <img src={img1} alt="shop-1" />
                        <div className="absolute inset-0   flex flex-col items-start justify-start p-4 text-white text-center">
                  <h4 className="  text-black font-semibold mb-2">
                    Screen Protection
                  </h4>
                  <p className="mb-4 text-black">6 items</p>
                  <button className="bg-white hover:bg-black hover:text-white text-black py-2 my-40 px-4 rounded-lg shadow-md">
                    Shop Now
                  </button>
                </div>
                    </div>
                    <div className='relative'>
                        <img src={img2} alt="shop-2"  />
                        <div className="absolute inset-0   flex flex-col items-start justify-start p-4 text-white text-center">
                  <h4 className="  text-black font-semibold mb-2">
                    Screen Protection
                  </h4>
                  <p className="mb-4 text-black">6 items</p>
                  <button className="bg-white hover:bg-black hover:text-white text-black py-2 my-40 px-4 rounded-lg shadow-md">
                    Shop Now
                  </button>
                </div>
                    </div>
                    <div className='relative'>
                        <img src={img3} alt="shop-3" />
                        <div className="absolute inset-0   flex flex-col items-start justify-start p-4 text-white text-center">
                  <h4 className="  text-black font-semibold mb-2">
                    Cables
                  </h4>
                  <p className="mb-4 text-black">6 items</p>
                  <button className="bg-white hover:bg-black hover:text-white text-black py-2 my-40 px-4 rounded-lg shadow-md">
                    Shop Now
                  </button>
                </div>
                    </div>
                    <div className='relative'>
                        <img src={img4} alt="shop-4" />
                        <div className="absolute inset-0   flex flex-col items-start justify-start p-4 text-white text-center">
                  <h4 className="  text-black font-semibold mb-2">
                    Adopters
                  </h4>
                  <p className="mb-4 text-black">6 items</p>
                  <button className="bg-white hover:bg-black hover:text-white text-black py-2 my-40 px-4 rounded-lg shadow-md">
                    Shop Now
                  </button>
                </div>
                    </div>
                    <div className='relative'>
                        <img src={img5} alt="shop-5" />
                        <div className="absolute inset-0   flex flex-col items-start justify-start p-4 text-white text-center">
                  <h4 className="  text-black font-semibold mb-2">
                     Docks and hubs.
                  </h4>
                  <p className="mb-4 text-black">6 items</p>
                  <button className="bg-white hover:bg-black hover:text-white text-black py-2 my-40 px-4 rounded-lg shadow-md">
                    Shop Now
                  </button>
                </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SliderShop