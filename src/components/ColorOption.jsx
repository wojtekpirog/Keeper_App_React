import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

function ColorOption({ colorInfo, onBackgroundColorChange }) {
  const { hexCode, name } = colorInfo;
  const [isHovered, setIsHovered] = useState(false);

  const borderColor = name === "Default" ? "#b2b2b2" : hexCode;

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <Tooltip title={name} arrow={true}>
      <div style={{ backgroundColor: hexCode, border: `2px solid ${isHovered ? "#202124" : borderColor}` }} onClick={() => onBackgroundColorChange(hexCode)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
    </Tooltip>
  );
}

export default ColorOption;
