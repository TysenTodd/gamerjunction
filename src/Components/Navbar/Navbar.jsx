import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/gamerjunction-logo.png";
import hamburger_icon from "../Assets/hamburger_icon.png";
import cart_icon from "../Assets/cart-icon.png";
import backgroundVideo from "../Assets/navbar-bg.mp4";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = ({ user }) => {
  const [menu, setMenu] = useState("shop");
  const location = useLocation();
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdownRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // For Mobile Dropdown
  const dropdown_toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (menuName) => {
    setMenu(menuName);
    setIsMenuOpen(false); // Close the menu
  };

  useEffect(() => {
    // Updates the active menu based on the current URL path
    switch (location.pathname) {
      case "/":
        setMenu("shop");
        break;
      case "/pc":
        setMenu("pc");
        break;
      case "/console":
        setMenu("console");
        break;
      case "/mobile":
        setMenu("mobile");
        break;
      case "/gear":
        setMenu("gear");
        break;
      case "/support":
        setMenu("support");
        break;
      case "/account":
        setMenu("account");
        break;
      case "/login":
        setMenu("account"); // Treat login as account for menu highlighting
        break;
      default:
        setMenu("shop");
    }
  }, [location.pathname]);

  return (
    <div className="navbar">
      {/* Background video for the navbar */}
      <video autoPlay loop muted className="nav-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="nav-overlay">
        {/* Logo and link to home */}
        <div className="nav-logo">
          <Link to="/" onClick={() => handleMenuItemClick("shop")}>
            <img src={logo} alt="GamerJunction Logo" />
          </Link>
        </div>

        {/* Hamburger menu icon for mobile view */}
        <img
          src={hamburger_icon}
          alt="Menu"
          className={`nav-dropdown ${isMenuOpen ? "open" : ""}`}
          onClick={dropdown_toggle}
          ref={dropdownRef}
        />

        {/* Navigation menu */}
        <ul
          className={`nav-menu ${isMenuOpen ? "nav-menu-visible" : ""}`}
          ref={menuRef}
        >
          {/* Shop menu item */}
          <li
            onClick={() => handleMenuItemClick("shop")}
            className={`TaskClick ${menu === "shop" ? "active" : ""}`}
          >
            <Link className="nav-menu-link" to="/">
              Shop
            </Link>
            {menu === "shop" && <hr />}
          </li>

          {/* PC menu item */}
          <li
            onClick={() => handleMenuItemClick("pc")}
            className={`TaskClick ${menu === "pc" ? "active" : ""}`}
          >
            <Link className="nav-menu-link" to="/pc">
              PC
            </Link>
            {menu === "pc" && <hr />}
          </li>

          {/* Console menu item */}
          <li
            onClick={() => handleMenuItemClick("console")}
            className={`TaskClick ${menu === "console" ? "active" : ""}`}
          >
            <Link className="nav-menu-link" to="/console">
              Console
            </Link>
            {menu === "console" && <hr />}
          </li>

          {/* Mobile menu item */}
          <li
            onClick={() => handleMenuItemClick("mobile")}
            className={`TaskClick ${menu === "mobile" ? "active" : ""}`}
          >
            <Link className="nav-menu-link" to="/mobile">
              Mobile
            </Link>
            {menu === "mobile" && <hr />}
          </li>

          {/* Gear menu item */}
          <li
            onClick={() => handleMenuItemClick("gear")}
            className={`TaskClick ${menu === "gear" ? "active" : ""}`}
          >
            <Link className="nav-menu-link" to="/gear">
              Gear
            </Link>
            {menu === "gear" && <hr />}
          </li>

          {/* Support menu item */}
          <li
            onClick={() => handleMenuItemClick("support")}
            className={`TaskClick ${menu === "support" ? "active" : ""}`}
          >
            <Link className="nav-menu-link" to="/support">
              Support
            </Link>
            {menu === "support" && <hr />}
          </li>

          {/* Account menu item */}
          <li
            onClick={() => handleMenuItemClick("account")}
            className={`TaskClick ${menu === "account" ? "active" : ""}`}
          >
            <Link className="nav-menu-link" to={user ? "/account" : "/login"}>
              {user ? "Account" : "Login"}
            </Link>
            {menu === "account" && <hr />}
          </li>
        </ul>

        {/* Cart icon and item count */}
        <div className="nav-cart">
          <Link to="/cart">
            <img src={cart_icon} alt="Cart" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
