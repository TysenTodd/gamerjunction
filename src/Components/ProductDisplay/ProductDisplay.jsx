import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-header">
        <h1>{product.name}</h1>
      </div>

      <div className="productdisplay-container">
        <div className="productdisplay-left">
          <img src={product.image} alt="product" />
        </div>
        <div className="productdisplay-main-img-container">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="product"
          />
        </div>
        <div className="item-info-container">
          <div className="productdisplay-star">
            <img src={star_icon} alt="star" />
            <img src={star_icon} alt="star" />
            <img src={star_icon} alt="star" />
            <img src={star_icon} alt="star" />
            <img src={star_dull_icon} alt="dull star" />
            <p>(62)</p>
          </div>
          <div className="productdisplay-price">
            <div className="productdisplay-price-old">{product.old_price}</div>
            <div className="productdisplay-price-new">${product.new_price}</div>
          </div>

          <div className="productdisplay-description">
            {product.description}
            <div className="button-container">
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                Add to Cart
              </button>
              <button className="save-button">♡ Save</button>
            </div>
            <p className="productdisplay-category">
              <span>
                Category:
                <div className="category-info">{product.category}</div>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
