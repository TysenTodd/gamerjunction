import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter">
        <h1>Get Exclusive Offers!</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
