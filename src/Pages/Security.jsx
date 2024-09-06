import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Security.css";

const Security = () => {
  const [securityOptions, setSecurityOptions] = useState({
    twoFactorAuth: false,
    emailNotifications: false,
    accountLock: false,
  });

  const toggleOption = (option) => {
    setSecurityOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  return (
    <div className="security-page">
      <div className="account-sidebar">
        <ul>
          <li>
            <NavLink
              to="/account"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account-activity"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Account Activity
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage-account"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Manage Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/security"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Security
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="security-content">
        <h1>Security</h1>
        <div className="security-options">
          <div className="security-option">
            <label>Two-Factor Authentication</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={securityOptions.twoFactorAuth}
                onChange={() => toggleOption("twoFactorAuth")}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="security-option">
            <label>Email Notifications</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={securityOptions.emailNotifications}
                onChange={() => toggleOption("emailNotifications")}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="security-option">
            <label>Account Lock</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={securityOptions.accountLock}
                onChange={() => toggleOption("accountLock")}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
