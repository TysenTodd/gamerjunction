import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/ManageAccount.css";

const ManageAccount = () => {
  const [email, setEmail] = useState("admin.gamerjunction@gmail.com");
  const [firstName, setFirstName] = useState("GamerJunction");
  const [lastName, setLastName] = useState("Admin");
  const [dob, setDob] = useState("03/03/2001");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    // Implement save logic here, such as sending data to the server
    console.log("Account details saved");
  };

  return (
    <div className="manageaccount-page">
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
      <div className="manageaccount-header">
        <h1>Manage Account</h1>
        <section>
          <h2>Email</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </section>

        <section>
          <h2>Password</h2>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </section>

        <section>
          <h2>First Name</h2>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </section>

        <section>
          <h2>Last Name</h2>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </section>

        <section>
          <h2>Date of Birth</h2>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </section>

        <section>
          <h2>Language</h2>
          <p>Primary language: English (United States)</p>
          <a href="/edit-language">Add another language</a>
        </section>
      </div>
    </div>
  );
};

export default ManageAccount;
