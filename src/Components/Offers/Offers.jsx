// Offers.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  const navigate = useNavigate();

  const offerShopNow = () => {
    navigate("/gear");
  };

  return (
    <div className="offers-background">
      <div className="offers">
        <div className="offers-left">
          <h1>ENHANCE</h1>
          <h1>Build The Most Popular Gaming Setup</h1>
          <p>OUR BEST-SELLING GEAR</p>
          <button onClick={offerShopNow}>Shop Now</button>
        </div>
        <div className="offers-right">
          <img src={exclusive_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
