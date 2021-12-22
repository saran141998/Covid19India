import React, { useState } from "react";
import "./NavBarStyles.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [switchTheme, setSwitchTheme] = useState(true);
  const toggleTheme = () => {
    document.body.classList.toggle("white-mode");
    setSwitchTheme(false);
  };
  const switchWhite = () => {
    document.body.classList.toggle("white-mode");
    setSwitchTheme(true);
  };
  return (
    <header className="nav-bar">
      <div className="flex-content">
        <div>
          <i className="fas fa-virus"></i>
          <Link className="link-color" to="/">
            Covid Tracker - India
          </Link>
        </div>

        <div>
          {switchTheme ? (
            <i onClick={toggleTheme} className="fas fa-sun pointer"></i>
          ) : (
            <i onClick={switchWhite} className="fas fa-moon pointer"></i>
          )}
        </div>
      </div>
    </header>
  );
}
