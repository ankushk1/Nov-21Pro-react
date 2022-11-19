import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./components.css";
const Navbar = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        {/* <div className='ms-4'><Link to="/">Home</Link></div>
        <div className='ms-4'><Link to="/contact">Contact</Link></div>
        <div className='ms-4'><Link to="/signup">Sign Up</Link></div> */}

        <div className="ms-4">
          <NavLink
            to="/"
            // className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
            style={({ isActive }) =>
              isActive
                ? {
                    borderBottom: "2px solid rgb(104, 182, 237)",
                    color: "rgb(16, 93, 152)",
                    backgroundColor: "white",
                    textDecoration: "none"
                  }
                : {
                    color: "black",
                    textDecoration: "none"
                  }
            }
          >
            Home
          </NavLink>
        </div>
        <div className="ms-4">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-inactive"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="ms-4">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-inactive"
            }
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
