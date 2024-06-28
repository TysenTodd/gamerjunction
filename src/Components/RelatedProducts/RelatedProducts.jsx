import React from "react";
import "./RelatedProducts.css";
import all_products from "../Assets/all_products";
import Item from "../Item/Item";

// Function to shuffle related products in specific category and limit to 6
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const RelatedProducts = ({ category, currentProductId }) => {
  const filteredProducts = all_products.filter(
    (item) => item.category === category && item.id !== currentProductId
  );

  const shuffledProducts = shuffleArray(filteredProducts).slice(0, 10);

  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {shuffledProducts.length > 0 ? (
          shuffledProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
