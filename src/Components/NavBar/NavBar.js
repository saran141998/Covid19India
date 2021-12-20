import React from "react";
import "./NavBarStyles.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const toggleTheme = () => {
    console.log("click");
    document.body.classList.toggle("white-mode");
  };
  return (
    <div className="nav-bar">
      <div>
        <Link className="link-color" to="/">
          Covid Tracker - India
        </Link>
      </div>
      <div>
        <i onClick={toggleTheme} className="fas fa-sun pointer"></i>
      </div>
    </div>
  );
}
