import Tooltip from "@mui/material/Tooltip";

function ColorOption({ colorInfo, onBackgroundColorChange }) {
  const { hexCode, name } = colorInfo;
  return (
    <Tooltip title={name} arrow={true}>
      <div style={{ backgroundColor: hexCode }} onClick={() => onBackgroundColorChange(hexCode)}></div>
    </Tooltip>
  );
}

export default ColorOption;
