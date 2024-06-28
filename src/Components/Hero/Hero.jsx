import React from "react";
import Item from "../Item/Item";
import hero_products from "../Assets/hero-products";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Latest Releases</h1>
      <div className="hero-collections-item">
        {hero_products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
