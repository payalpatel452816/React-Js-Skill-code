import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tred1 from "../assets/electronic-8.png";
import Tred2 from "../assets/electronic-9.jpg";
import Tred3 from "../assets/electronic-10.png";
import Tred4 from "../assets/electronic-11.png";
import Tred5 from "../assets/electronic-12.png";
import Tred6 from "../assets/electronic-13.png";
import Tred7 from "../assets/electronic-14.png";
import Tred8 from "../assets/electronic-15.png";
import Tred9 from "../assets/electronic-16.jpg";
import Tred10 from "../assets/electronic-17.jpg";
import Tred11 from "../assets/electronic-18.jpg";
import Tred12 from "../assets/electronic-19.jpg";
import '../css/tred.css'
const Trendig = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
    };

    const products = [
        { img1: Tred1, img2: Tred2, title: "UltraGlass 2 Treated Screen Protectore for iphone 15 Pro", price: "$99.99" },
        { img1: Tred3, img2: Tred4, title: "Smart Light Switch with Thred", price: "$49.99" },
        { img1: Tred5, img2: Tred6, title: "SoundForm Rise", price: "$99.99" },
        { img1: Tred7, img2: Tred8, title: "Wireless on-Ear Headphones for kids", price: "$99.99" },
        { img1: Tred9, img2: Tred10, title: "3-in-1 Wireless Charger with official MagSafe Charging 15W", price: "$99.99" },
        { img1: Tred11, img2: Tred12, title: "3-in-1 Wireless Charger For Apple Device", price: "$99.99" },
    ];

    return (
        <div className="container">
            <h1 className=" text-4xl ">Trending Product</h1>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <div className="tred-item " key={index}>
                        <div className="tred-img">
                            <img src={product.img1} alt={product.title} />
                            <img src={product.img2} alt="" className="back" />
                        </div>
                        <div className="tred-info">
                            <h3>{product.title}</h3>
                            <p>Price: {product.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Trendig;

