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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="header">
      <img
        src={images[currentImageIndex]}
        alt="Banner"
        className="header-image"
      />
    </div>
  );
};

export default Header;
