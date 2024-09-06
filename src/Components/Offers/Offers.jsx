import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const offerShopNow = () => {
    navigate("/gear");
  };

  return (
    <div ref={ref} className={`offers-background ${inView ? "slide-in" : ""}`}>
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
