import React from "react";
import appLogo from "../assets/images/stickies-fill.svg";
import hamburgerIcon from "../assets/images/list.svg";

function Header() {
  return (
    <header>
      <div className="hamburger"><img src={hamburgerIcon} alt="hamburger menu" /></div>
      <h1><img src={appLogo} alt="stickies fill" /><span>Keeper App</span></h1>
    </header>
  );
}

export default Header;