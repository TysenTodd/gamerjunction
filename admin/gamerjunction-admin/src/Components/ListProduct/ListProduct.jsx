import React from "react";
import "./ListProduct.css";
import { useState, useEffect } from "react";
import delete_icon from "../../assets/delete-icon.png";

// State to hold all products
const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  // Function to fetch product data from the server
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  // useEffect hook to fetch product data when the component mounts=
  useEffect(() => {
    fetchInfo();
  }, []);

  // Function to remove a product by sending a POST request to the server
  const remove_product = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className="list-product">
      <h1>Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Name</p>
        <p>New Price</p>
        <p>Old Price</p>
        <p>Category</p>
        <p>Type</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <div
            key={index}
            className="listproduct-format-main listproduct-format"
          >
            <img
              src={product.image}
              alt=""
              className="listproduct-product-icon"
            />
            <p>{product.name}</p>
            <p>${product.new_price}</p>
            <p>
              {product.old_price ? (
                `$${product.old_price}`
              ) : (
                <span>&nbsp;</span>
              )}
            </p>
            <p>{product.category}</p>
            <p>{product.type}</p>
            <img
              onClick={() => {
                {
                  remove_product(product.id);
                }
              }}
              className="listproduct-remove-icon"
              src={delete_icon}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
