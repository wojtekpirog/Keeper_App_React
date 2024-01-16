import React from "react";
import appLogo from "../assets/images/stickies-fill.svg";
import MenuOption from "./MenuOption";
import hamburgerIcon from "../assets/images/list.svg";
import bulbIcon from "../assets/images/lightbulb.svg";
import bellIcon from "../assets/images/bell.svg";
import pencilIcon from "../assets/images/pencil.svg";
import archiveIcon from "../assets/images/archive.svg";
import trashIcon from "../assets/images/trash.svg";

// const burgerIcon = document.querySelector(".hamburger > img");
// const sideMenu = document.querySelector(".sideMenu");

// const toggleMenu = () => {
//   sideMenu.classList.toggle("sideMenuActive");
// }

// burgerIcon.addEventListener("click", toggleMenu);

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
        <MenuOption link="https://www.example.com/notes" img={bulbIcon} alt="light bulb icon" span="Notatki" />
        <MenuOption link="https://www.example.com/remainders" img={bellIcon} alt="bell icon" span="Przypomnienia" />
        <MenuOption link="https://www.example.com/labels" img={pencilIcon} alt="pencil icon" span="Edytuj etykiety" />
        <MenuOption link="https://www.example.com/archive" img={archiveIcon} alt="archive icon" span="Archiwum" />
        <MenuOption link="https://www.example.com/trash" img={trashIcon} alt="trash icon" span="Kosz" />
      </div>
    </header>
  );
}

export default Header;