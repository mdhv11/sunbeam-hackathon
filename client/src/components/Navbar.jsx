import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="properties">
          MyAirbnb
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/properties">
                Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/add-property">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/bookings">
                Bookings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link" aria-current="page">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
