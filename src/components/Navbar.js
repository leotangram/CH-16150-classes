import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="activeRoute" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeRoute" to="/counter">
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeRoute" to="/cart">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeRoute" to="/categories/:categoryId">
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
