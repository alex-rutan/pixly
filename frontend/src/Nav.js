import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Navbar that routes to home and new image form
*/
function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid ps-5">

      <NavLink className="navbar-brand" exact to="/">
        Pixly
      </NavLink>
      <ul className="nav navabar-nav">
        <li>
          <NavLink className="nav-item nav-link" to="/add-image">
            Add Image
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;