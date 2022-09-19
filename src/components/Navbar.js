import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center">
        <ul className="d-flex">
          <li className="link-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="link-item">
            <Link to="shop">Shop</Link>
          </li>
          <li className="link-item">
            <Link to="products">Products</Link>
          </li>
          <li className="link-item">
            <Link to="support">Support</Link>
          </li>
        </ul>
        <div className="logo mr-auto">
          <h3>Logo Goes Here</h3>
        </div>
        <div className="product-search">
          <input
            type="text"
            name="searchProduct"
            id="searchProduct"
            placeholder="Search product here"
            className="form-control"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
