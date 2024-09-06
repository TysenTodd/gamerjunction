import React, { useState, useEffect } from "react"; //Add useContext if errors
import all_products from "../Components/Assets/all_products";
import { createContext } from "react";
import axios from "axios";

// Creating a new context named ShopContext
export const ShopContext = createContext(null);

// Function to get default cart state
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

// ShopContextProvider component to provide context to its children
const ShopContextProvider = (props) => {
  // State to hold cart items, initialized with default cart state
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAll_Product(data));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    if (localStorage.getItem("auth-token")) {
      axios
        .post(
          "http://localhost:4000/addtocart",
          { itemId: itemId },
          {
            headers: {
              Accept: "application/json",
              "auth-token": localStorage.getItem("auth-token"),
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => console.log(response.data))
        .catch((error) => console.error("Error:", error));
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      axios
        .post(
          "http://localhost:4000/removefromcart",
          { itemId: itemId },
          {
            headers: {
              Accept: "application/json",
              "auth-token": localStorage.getItem("auth-token"),
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => console.log(response.data))
        .catch((error) => console.error("Error:", error));
    }
  };

  // Function to calculate the total amount of the cart
  const getTotalCartAmount = () => {
    let TotalAmount = 0;
    // Loop through each item in the cart
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (products) => products.id === Number(item)
        );
        // Calculate the total price for this item and add to the total amount
        TotalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return TotalAmount;
  };

  // Function to calculate the total number of items in the cart
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Add the quantity of the item to the total items count
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  // Context value that will be provided to the children
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  // Providing the context value to the children components
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
