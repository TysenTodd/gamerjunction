import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import footer_logo from "../Assets/gamerjunction-footer-logo.png";
import instagram_logo from "../Assets/instagram_logo.png";
import tiktok_logo from "../Assets/tiktok_logo.png";
import youtube_logo from "../Assets/youtube_logo.png";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          src={footer_logo}
          alt="GamerJunction Logo"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>
        <ul className="footer-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/privacypolicy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/termsofservice">Terms of Service</Link>
          </li>
        </ul>
        <h1>Connect with us!</h1>
        <div className="footer-social-logo">
          <div className="footer-logo-container1">
            <a
              href="https://www.instagram.com/gamerjunctionig/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram_logo} alt="Instagram" />
            </a>
          </div>
          <div className="footer-logo-container2">
            <a
              href="https://www.tiktok.com/@gamerjunctiontiktok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok_logo} alt="TikTok" />
            </a>
          </div>
          <div className="footer-logo-container3">
            <a
              href="https://www.youtube.com/channel/UCRzsSCtMscn23cicOZiL_9g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube_logo} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
