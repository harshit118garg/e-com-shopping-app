import React from "react";
import "./styles/Navbar.scss";

const Navbar = ({setShow}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/" onClick={() => setShow(true)}>
            My Shopping Cart
          </a>
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i className="fa fa-cart-arrow-down"></i>
            </span>
            <span className="translate-middle badge rounded-pill text-bg-danger">
              0
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
