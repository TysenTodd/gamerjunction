import React from "react";
import "./Breadcrumb.css";
import breadcrumb_arrow from "../Assets/breadcrumb_arrow.png";

/*Breadcrumb component displaying the product category within the breadcrumb navigation*/
const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb">
      <p>SHOP</p> <img src={breadcrumb_arrow} alt="" />
      <div className="product-category">
        <p>{product.category}</p>
      </div>
    </div>
  );
};
export default Breadcrumb;
