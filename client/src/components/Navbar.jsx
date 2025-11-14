import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to=".">
         All Movies
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/movie_review" >
                Movies Reviews
              </Link>
              <Link
  to={{
    pathname: "../pages/movie-list/movie_review",
    search: "?query=string",
    hash: "#hash",
  }}
/>

            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/add-property">
                My Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/cart">
                Shared With Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/bookings">
                All Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about-us">
               Edit Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/contact-us">
                Change Password
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
