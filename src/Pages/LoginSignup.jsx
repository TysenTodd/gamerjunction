import React from "react";
import "./CSS/LoginSignup.css";
import footer_logo from "../Components/Assets/gamerjunction-footer-logo.png";

const LoginSignup = () => {
  return (
    <div className="LoginSignup">
      <div className="LoginSignup-container">
        <img src={footer_logo} alt="GamerJunction Logo" />
        <h1>Sign Up</h1>
        <div className="LoginSignup-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="date" placeholder="Date of Birth" />
        </div>
        <button>Sign Up</button>
        <p className="LoginSignup-login">
          Already have an account? <span>Login Here</span>
          <div className="LoginSignup-agree">
            <p>
              By continuing. I agree to the
              <span> Terms of Use</span> &<span> Privacy Policy</span>
            </p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
