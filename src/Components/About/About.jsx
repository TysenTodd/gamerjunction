import React from "react";
import "./About.css"; // Make sure to create and style this CSS file

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Welcome to GamerJunction</h1>
        <p>Level Up Your Gaming Experience.</p>
      </header>

      <section className="about-about">
        <h2>About Us</h2>
        <p>
          Founded in 2020, GamerJunction is a leading online retailer
          specializing in the latest and greatest in gaming hardware, software,
          and accessories. Our mission is to provide gamers with everything they
          need to elevate their gaming experience to the next level.
        </p>
        <p>
          We offer a wide range of products from top brands, ensuring that our
          customers have access to the best gear on the market. From gaming PCs
          and consoles to peripherals and accessories, we've got you covered.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At GamerJunction, our mission is to be the go-to destination for
          gamers around the world. We strive to offer an unparalleled shopping
          experience, with a focus on quality, customer service, and competitive
          pricing.
        </p>
        <p>
          Whether you're a casual gamer or a professional eSports player, we aim
          to provide you with the tools you need to succeed and enjoy your
          gaming journey.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Passion:</strong> We are passionate about gaming and are
            committed to bringing that passion to our customers.
          </li>
          <li>
            <strong>Innovation:</strong> We stay ahead of the curve by offering
            the latest and most innovative gaming products.
          </li>
          <li>
            <strong>Customer Focus:</strong> Our customers are at the heart of
            everything we do. We are dedicated to providing exceptional customer
            service and support.
          </li>
          <li>
            <strong>Community:</strong> We believe in the power of the gaming
            community and strive to foster a sense of belonging among our
            customers.
          </li>
        </ul>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, please feel free to
          reach out to us:
        </p>
        <ul>
          <li>Email: support@gamerjunction.com</li>
          <li>Address: 7601 Penn Ave S, Richfield, MN 55423</li>
        </ul>
      </section>

      <footer className="about-footer">
        <p>© 2024 GamerJunction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
