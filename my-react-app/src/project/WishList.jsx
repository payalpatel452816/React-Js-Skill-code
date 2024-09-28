import React from "react";
import list1 from "../project/assets/black-1.jpg";
import list2 from "../project/assets/black-2.jpg";
import list3 from "../project/assets/black-3.jpg";
import list4 from "../project/assets/blue.jpg";
import list5 from "../project/assets/brown-2.jpg";
import list6 from "../project/assets/brown-3.jpg";
import list7 from "../project/assets/brown.jpg";
import list8 from "../project/assets/green.jpg";
import list9 from "../project/assets/light-green-1.jpg";
import list10 from "../project/assets/light-green-2.jpg";
import list11 from "../project/assets/orange-1.jpg";
import list12 from "../project/assets/pink-1.jpg";
import list13 from "../project/assets/purple.jpg";
import list14 from "../project/assets/white-1.jpg";
import list15 from "../project/assets/white-2.jpg";
import list16 from "../project/assets/white-3.jpg";
import list17 from "../project/assets/white-4.jpg";
import list18 from "../project/assets/white-5.jpg";
import list19 from "../project/assets/white-6.jpg";


const WishList = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="title">
          <h1>YOUR WISHLIST</h1>
        </div>
        <div className="list-grid">
          <div className="list-item">
            <div className="list-img">
              <img src={list11} alt=" " />
              <img src={list14} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Ribbed Tank Top</h3>
              <p>Price: $99.99</p>
            </div>

          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={list8} alt=" " />
              <img src={list13} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Ribbed modal T-shirt</h3>
              <p>Price: $99.99</p>
            </div>
            
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={list16} alt=" " />
              <img src={list17} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Oversized Printed T-shirt</h3>
              <p>Price: $99.99</p>
            </div>
            
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={list2} alt=" " />
              <img src={list12} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>Oversized Printed T-shirt</h3>
              <p>Price: $99.99</p>
            </div>
            
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={list5} alt=" " />
              <img src={list6} alt=" " className="rear" />
            </div>
            <div className="list-info">
              <h3>V-neck linen T-shirt</h3>
              <p>Price: $99.99</p>
            </div>
            
          </div>
          <div className="list-item">
            <div className="list-img">
              <img src={list9} alt=" " />
              <img src={list10} alt=" " className="rear" />
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

export default WishList;
