import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import footer_logo from "../Components/Assets/gamerjunction-footer-logo.png";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", FormData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FormData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", FormData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FormData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const toggleState = () => {
    setState(state === "Login" ? "Sign Up" : "Login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "Login") {
      login();
    } else {
      signup();
    }
  };

  return (
    <div className="LoginSignup">
      <div className="LoginSignup-container">
        <img src={footer_logo} alt="GamerJunction Logo" />
        <h1>{state}</h1>
        <form className="LoginSignup-fields" onSubmit={handleSubmit}>
          {state === "Sign Up" && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={FormData.firstName}
                onChange={changeHandler}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={FormData.lastName}
                onChange={changeHandler}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={FormData.email}
                onChange={changeHandler}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={FormData.password}
                onChange={changeHandler}
              />
              <input
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth"
                value={FormData.dateOfBirth}
                onChange={changeHandler}
              />
            </>
          )}
          {state === "Login" && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={FormData.email}
                onChange={changeHandler}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={FormData.password}
                onChange={changeHandler}
              />
            </>
          )}
          <button type="submit">
            {state === "Sign Up" ? "Sign Up" : "Login"}
          </button>
        </form>
        {state === "Sign Up" ? (
          <p className="LoginSignup-login">
            Already have an account?{" "}
            <span onClick={toggleState}>Login Here</span>
          </p>
        ) : (
          <p className="LoginSignup-login">
            Create an Account? <span onClick={toggleState}>Click Here</span>
          </p>
        )}

        <div className="LoginSignup-agree">
          <p>
            By continuing. I agree to the
            <span> Terms of Use</span> &<span> Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
