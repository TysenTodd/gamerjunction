import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/AccountActivity.css";

const AccountActivity = () => {
  return (
    <div className="accountactivity-page">
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
      <div className="accountactivity-header">
        <h1>Account Activity</h1>
        <section>
          <h2>Recent Transactions</h2>
          <p>You currently have no past orders.</p>
        </section>
      </div>
    </div>
  );
};

export default AccountActivity;
