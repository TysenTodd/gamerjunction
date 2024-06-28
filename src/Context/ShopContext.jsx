import React, { useState } from "react"; //Add useContext if errors
import all_products from "../Components/Assets/all_products";
import { createContext } from "react";

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
  const [cartItems, setCartItems] = useState(getDefaultCart);

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems); // Log current cart items to the console
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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
