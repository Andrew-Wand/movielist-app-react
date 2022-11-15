import React from "react";
import "../styles/header.css";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-inner">
          <div className="header-content">
            <div className="header-title">
              <h1>Movie Night!</h1>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
