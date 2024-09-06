import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
    }, 3000); // Reset after 3 seconds
  };

  return (
    <div className="newsletter-wrapper">
      <div className="newsletter">
        <h1>Get Exclusive Offers!</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="input-container">
          <input type="email" placeholder="Your Email" disabled={subscribed} />
          <button onClick={handleSubscribe} disabled={subscribed}>
            {subscribed ? (
              <span className="checkmark">&#10003;</span>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
