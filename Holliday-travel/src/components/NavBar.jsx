import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header">
        <h1 className="h1">Envato Market</h1>
      </div>
      <button className="buynow">Buy Now</button>
      <div className="header">
        <p className="h1">Envato Market</p>
      </div>
      <p className="buynow">Buy Now</>

      <div className="link">
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/tours">Contact Page</Link>
          </li>
          <li>
            <Link to="/tours">Tour List</Link>
          </li>
          <li>
            <Link to="/tours">Tour Detail</Link>
          </li>
          <li>
            <Link to="/tours">Payment Page</Link>
          </li>
          <li>
            <Link to="/tours">Add Testimony</Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default NavBar;
