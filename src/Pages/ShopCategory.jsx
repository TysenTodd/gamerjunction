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
  const [sortOption, setSortOption] = useState("default"); // Add state for sorting option

  // Filter and sort products
  const filteredProducts = all_products.filter(
    (item) => item.category === props.category
  );

  // Sort products based on the selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.new_price - b.new_price;
      case "price-desc":
        return b.new_price - a.new_price;
      case "rating":
        return b.rating - a.rating; // Assuming you have a rating field
      case "newest":
        return new Date(b.date) - new Date(a.date); // Assuming you have a date field
      default:
        return 0;
    }
  });

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = sortedProducts.slice(
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
            Sort by
            <select value={sortOption} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
            </select>
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
