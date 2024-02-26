import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";
import ColorLensIcon from "@mui/icons-material/ColorLens";

function ColorLensButton({ isFormExpanded, OnColorMenuClick }) {
  return (
    <Zoom in={isFormExpanded ? true : false} timeout={500} easing="ease-in-out">
      <Tooltip title="Background color" arrow={true}>
        <button type="button" onClick={OnColorMenuClick}>
          <ColorLensIcon htmlColor="#fff" title="Change color" />
        </button>
      </Tooltip>      
    </Zoom>
  );
}

export default ColorLensButton;