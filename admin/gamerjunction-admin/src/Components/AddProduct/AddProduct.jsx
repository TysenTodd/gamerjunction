import React from "react";
import "./AddProduct.css";
import upload_logo from "../../assets/upload-logo.png";
import { useState } from "react";

const AddProduct = () => {
  // State variables using useState hook
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "pc",
    type: "",
    new_price: "",
    old_price: "",
  });
  // Event handler for file input change
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  // Event handler for input field changes (product details)
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  // Function to add a new product
  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    // Create FormData object and append the selected image file
    let formData = new FormData();
    formData.append("product", image);

    // Upload image using fetch API to Node.js server
    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    // If image upload is successful
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);

      // Add product to database using fetch API
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          // Show success or failure message based on response
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Name</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter Name"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>New Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Old Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-select"
        >
          <option value="pc">PC</option>
          <option value="console">Console</option>
          <option value="mobile">Mobile</option>
          <option value="gear">Gear</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Type</p>
        <select
          value={productDetails.type}
          onChange={changeHandler}
          name="type"
          className="add-product-select"
        >
          <option value="mice">Mice</option>
          <option value="keyboards">Keyboards</option>
          <option value="monitors">Monitors</option>
          <option value="headsets">Headsets</option>
          <option value="microphones">Microphones</option>
          <option value="hardware">Hardware</option>
          <option value="consoles">Consoles</option>
          <option value="games">Games</option>
          <option value="controllers">Controllers</option>
          <option value="mobile controllers">Mobile Controllers</option>
          <option value="handhelds">Mobile Handhelds</option>
          <option value="phones">Phones</option>
          <option value="chairs">Chairs</option>
          <option value="desks">Desks</option>
          <option value="speakers">Speakers</option>
          <option value="glasses">Glasses</option>
          <option value="gloves">Gloves</option>
          <option value="pc-accessories">PC Accessories</option>
          <option value="console-accessories">Console Accessories</option>
          <option value="mobile-accessories">Mobile Accessories</option>
          <option value="gear-accessories">Gear Accessories</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_logo} alt="" />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          Add_Product();
        }}
        className="addproduct-btn"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
