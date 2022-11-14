import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/nav.css";

function Nav() {
  const lists = [
    { id: 1, title: "Ratings", toLink: "/" },
    { id: 2, title: "List", toLink: "/list" },
    { id: 3, title: "Spin", toLink: "/spin" },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (row) => {
    if (row.id === 1) {
      setActiveTab(row.id);
    }

    if (row.id === 2) {
      setActiveTab(row.id);
    }

    if (row.id === 3) {
      setActiveTab(row.id);
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-content">
          {lists.map((list) => (
            <Link to={list.toLink}>
              <li
                key={list.id}
                onClick={() => handleClick(list)}
                className={
                  list.id === activeTab ? "nav-link active" : "nav-link"
                }
              >
                {list.title}
              </li>
            </Link>
          ))}

          {/* <Link to={"/"}>
            <li
              className={activeTab ? "nav-link" : "nav-link active"}
              onClick={handleClick}
            >
              Ratings
            </li>
          </Link>

          <Link to={"/list"}>
            <li
              className={activeTab ? "nav-link active" : "nav-link"}
              onClick={handleClick}
            >
              List
            </li>
          </Link>

          <Link to={"/spin"}>
            <li
              className={activeTab ? "nav-link active" : "nav-link"}
              onClick={handleClick}
            >
              Spin
            </li>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
