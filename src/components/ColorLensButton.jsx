import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";
import ColorLensIcon from "@mui/icons-material/ColorLens";

function ColorLensButton({ isFormExpanded, OnColorMenuClick, iconColor }) {
  return (
    <Zoom in={isFormExpanded} timeout={500} easing="ease-in-out">
      <Tooltip title="Background color" arrow={true}>
        <button type="button" onClick={OnColorMenuClick}>
          <ColorLensIcon htmlColor={iconColor} title="Change color" />
        </button>
      </Tooltip>      
    </Zoom>
  );
}

export default ColorLensButton;