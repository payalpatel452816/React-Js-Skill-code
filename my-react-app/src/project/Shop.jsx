import React from "react";
import shop1 from "../project/assets/orange-1.jpg";
import shop2 from "../project/assets/black-1.jpg";
import shop3 from "../project/assets/brown.jpg";
import shop4 from "../project/assets/white-3.jpg";
import shop5 from "../project/assets/white-4.jpg";
import shop6 from "../project/assets/white-2.jpg";
import shop7 from "../project/assets/pink-1.jpg";
import shop8 from "../project/assets/brown-2.jpg";
import shop9 from "../project/assets/brown-3.jpg";
import shop10 from "../project/assets/light-green-1.jpg";
import shop11 from "../project/assets/light-green-2.jpg";
import shop12 from "../project/assets/beige.jpg";
import shop13 from "../project/assets/black-8.jpg";
import shop14 from "../project/assets/brown-4.jpg";
import shop15 from "../project/assets/black-9.jpg";
import shop16 from "../project/assets/black-5.jpg";
import shop17 from "../project/assets/black-11.jpg";
import shop18 from "../project/assets/black-12.jpg";
import shop19 from "../project/assets/purple.jpg";
import shop20 from "../project/assets/grey.jpg";
import shop21 from "../project/assets/grey-2.jpg";
import shop22 from "../project/assets/black-10.jpg";
import shop23 from "../project/assets/black-7.jpg";
import shop24 from "../project/assets/blue.jpg";
import "./style.css";

const Shop = () => {
  return (
    <div>
      <div className="banner">
        <div>
          <h1>New Arrival</h1>
          <p>Shop through our latest selection of Fashion</p>
        </div>
       
      </div>

      <div>
        <div className="list-grid mt-20">
          <div className="list-item">
            <div className="list-img">
              <img src={shop1} alt=" " />
              <img src={shop2} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Ribbed Tank Top</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={shop3} alt=" " />
              <img src={shop19} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Ribbed modal T-shirt</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={shop4} alt=" " />
              <img src={shop5} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Oversized Printed T-shirt</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={shop6} alt=" " />
              <img src={shop7} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Oversized Printed T-shirt</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={shop10} alt=" " />
              <img src={shop11} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Oversized Printed T-shirt</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={shop8} alt=" " />
              <img src={shop9} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>V-neck linen T-shirt</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={shop16} alt=" " />
              <img src={shop12} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Loose Fit Sweatshirt</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={shop13} alt=" " />
              <img src={shop14} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Loose Fit Sweatshirt</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={shop23} alt=" " />
              <img src={shop24} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Loose Fit Sweatshirt</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={shop20} alt=" " />
              <img src={shop21} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Loose Fit Sweatshirt</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={shop15} alt=" " />
              <img src={shop22} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Loose Fit Sweatshirt</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={shop17} alt=" " />
              <img src={shop18} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Loose Fit Sweatshirt</h3>
              <p>Price: $99.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
