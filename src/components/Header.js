import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <h1>TechyStar!</h1>
        <main>
          <Link to="/">Home</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/services">Services</Link>
        </main>
      </nav>
    </div>
  );
};

export default Header;
