import React from "react";
import appLogo from "../assets/images/stickies-fill.svg";
import hamburgerIcon from "../assets/images/list.svg";
import bulbIcon from "../assets/images/lightbulb.svg";
import bellIcon from "../assets/images/bell.svg";
import pencilIcon from "../assets/images/pencil.svg";
import archiveIcon from "../assets/images/archive.svg";
import trashIcon from "../assets/images/trash.svg";

const burgerIcon = document.querySelector(".hamburger > img");
const sideMenu = document.querySelector(".sideMenu");

const toggleMenu = () => {
  sideMenu.classList.toggle("sideMenuActive");
}

burgerIcon.addEventListener("click", toggleMenu);

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
        <div role="button">
          <a href="#">
            <img src={bulbIcon} alt="light bulb icon" />
            <span>Notatki</span>
          </a>
        </div>
        <div role="button">
          <a href="#">
            <img src={bellIcon} alt="bell icon" />
            <span>Przypomnienia</span>
          </a>
        </div>
        <div role="button">
          <a href="https://www.example.com">
            <img src={pencilIcon} alt="pencil icon" />
            <span>Edytuj etykiety</span>
          </a>
        </div>
        <div role="button">
          <a href="https://www.example.com">
            <img src={archiveIcon} alt="archive icon" />
            <span>Archiwum</span>
          </a>
        </div>
        <div role="button">
          <a href="https://www.example.com">
            <img src={trashIcon} alt="trash icon" />
            <span>Kosz</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;