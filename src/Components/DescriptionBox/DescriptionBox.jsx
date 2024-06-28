import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (62)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          GamerJunction is your ultimate online e-commerce platform, dedicated
          to providing gamers with the best in gaming gear, accessories, and
          software. Whether you're a casual player or a professional e-sports
          enthusiast, we offer a wide range of high-quality products to elevate
          your gaming experience. Explore our curated selection, featuring top
          brands and the latest innovations in the gaming world. Shop with
          confidence at GamerJunction, where passion meets performance.
        </p>
        <p>
          With a user-friendly interface and secure checkout process,
          GamerJunction ensures a seamless shopping experience from start to
          finish. Our dedicated customer support team is always ready to assist
          you with any inquiries or issues you might have. Join our community of
          gamers and stay updated with the latest trends, exclusive deals, and
          special promotions. At GamerJunction, we are committed to helping you
          achieve your gaming goals and enjoy every moment of your gameplay.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
