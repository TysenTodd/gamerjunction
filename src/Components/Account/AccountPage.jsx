import React from "react";
import { useNavigate } from "react-router-dom";
import "./AccountPage.css";
import { Link } from "react-router-dom";

const AccountPage = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="account-page">
      <div className="account-info">
        <p className="section-title">
          ACCOUNT INFORMATION{" "}
          <span className="required-fields">*Required Fields</span>
        </p>
        <div className="info-item">
          <label>FIRST NAME *</label>
          <p className="info-value">Gamerjunction</p>
        </div>
        <div className="info-item">
          <label>LAST NAME *</label>
          <p className="info-value">Admin</p>
        </div>
        <div className="info-item">
          <label>EMAIL ADDRESS *</label>
          <p className="info-value">admin.gamerjunction@gmail.com</p>
        </div>
        <div className="info-item">
          <label>BIRTHDATE</label>
          <p className="info-value">03/09/2001</p>
        </div>
      </div>
      <Link to="/manage-account" className="edit-btn">
        EDIT
      </Link>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AccountPage;
