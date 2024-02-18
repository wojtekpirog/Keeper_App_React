import React, { useState } from "react";
import MenuOption from "./MenuOption";
import HamburgerIcon from "./HamburgerIcon";
import AppLogo from "./AppLogo";
import menuOptions from "../assets/data/menuOptions";

function Header() {
  const [collapse, setCollapse] = useState(false);

  function toggleMenu() {
    setCollapse(!collapse);
  }

  return (
    <header>
      <HamburgerIcon onClickFn={toggleMenu} />
      <AppLogo />
      <div className={collapse ? "sideMenu sideMenuActive" : "sideMenu"}>
        {menuOptions.map(menuOption => {
          return (
            <MenuOption 
              key={menuOption.id} 
              link={menuOption.link} 
              img={menuOption.imgSrc} 
              alt={menuOption.altText} 
              span={menuOption.spanText} 
            />
          ); 
        })}
      </div>
    </header>
  );
}

export default Header;