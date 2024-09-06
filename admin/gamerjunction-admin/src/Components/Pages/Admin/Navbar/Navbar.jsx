import React from "react";
import "./Navbar.css";
import navbarlogo from "../../../../assets/admin-logo.png";
import profilelogo from "../../../../assets/profile-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navbarlogo} alt="Navbar Logo" className="nav-logo" />
      <img src={profilelogo} alt="Profile Logo" className="profile-logo" />
    </div>
  );
};

export default Navbar;
