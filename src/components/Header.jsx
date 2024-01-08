import React from "react";
import appLogo from "../assets/images/stickies-fill.svg";
import hamburgerIcon from "../assets/images/list.svg";

function Header() {
  return (
    <header>
      <div className="hamburger">
        <img src={hamburgerIcon} alt="hamburger menu" />
      </div>
      <h1>
        <img src={appLogo} alt="stickies fill" />
        <span>Keeper App</span>
      </h1>
      <div className="sideMenu">
        <div role="button" className="sideMenuItem">
          <a href="https://www.example.com"><span>Notatki</span></a>
        </div>
        <div role="button" className="sideMenuItem">
          <a href="https://www.example.com"><span>Przypomnienia</span></a>
        </div>
        <div role="button" className="sideMenuItem">
          <a href="https://www.example.com"><span>Edytuj etykiety</span></a>
        </div>
        <div role="button" className="sideMenuItem">
          <a href="https://www.example.com"><span>Archiwum</span></a>
        </div>
        <div role="button" className="sideMenuItem">
          <a href="https://www.example.com"><span>Kosz</span></a>
        </div>
      </div>
    </header>
  );
}

export default Header;