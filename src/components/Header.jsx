import React, { useState, useEffect } from "react";
import MenuOption from "./MenuOption";
import HamburgerIcon from "./HamburgerIcon";
import AppLogo from "./AppLogo";
import menuOptions from "../assets/data/menuOptions";
import TimeBox from "./TimeBox";
import DateBox from "./DateBox";

function Header() {
  const [collapse, setCollapse] = useState(false);
  const [dateAndTime, setDateAndTime] = useState({
    date: "",
    time: ""
  });

  function toggleMenu() {
    setCollapse(!collapse);
  }  

  useEffect(() => {
    let interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      const time = now.toLocaleTimeString("en-GB", { hour: "numeric", minute: "numeric", second: "numeric" });

      setDateAndTime((prevDateAndTime) => {
        return {
          ...prevDateAndTime,
          date: date,
          time: time,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [dateAndTime]);

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
      <div className="dateTimeBox">
        <TimeBox time={dateAndTime.time} />
        <DateBox date={dateAndTime.date} />
      </div>
    </header>
  );
}

export default Header;