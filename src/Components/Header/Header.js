import React, { useState, useEffect } from "react";
import pc_banner from "../Assets/pc_banner.png";
import sale_pc_banner from "../Assets/sale_pc_banner.png";
import console_banner from "../Assets/console_banner.png";
import sale_console_banner from "../Assets/sale_console_banner.png";
import mobile_banner from "../Assets/mobile_banner.png";
import sale_mobile_banner from "../Assets/sale_mobile_banner.png";
import gear_banner from "../Assets/gear_banner.png";
import sale_gear_banner from "../Assets/sale_gear_banner.png";
import support_banner from "../Assets/support_banner.png";
import "./Header.css";

const Header = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="header">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Banner"
          className={`header-image ${
            index === currentImageIndex ? "show" : ""
          } ${fade ? "fade-out" : ""}`}
        />
      ))}
    </div>
  );
};

export default Header;
