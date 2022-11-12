import React from "react";
import { Link } from "react-router-dom";

import "../styles/nav.css";

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-content">
          <Link to={"/"}>
            <li className="nav-link">Ratings</li>
          </Link>

          <Link to={"/list"}>
            <li className="nav-link">List</li>
          </Link>

          <Link to={"/spin"}>
            <li className="nav-link">Spin</li>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
