import React, { useState, useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

// Lists Products on Each Page
const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const productsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = all_products.filter(
    (item) => item.category === props.category
  );
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="shop-category">
      {props.category !== "support" && (
        <div className="shopcategory-indexSort">
          <p>
            <span>
              Showing {startIndex + 1}-
              {Math.min(startIndex + productsPerPage, totalProducts)}
            </span>{" "}
            <div className="total-productsSort">
              {" "}
              of {totalProducts} products
            </div>
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
      )}
      <div className="shopcategory-products">
        {currentProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
