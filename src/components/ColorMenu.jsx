import ColorOption from "./ColorOption";
import colorOptions from "../assets/data/colors";

function ColorMenu({ onColorChange }) {
  return (
    <div className="colorMenu">
      {colorOptions.map((color, index) => {
        return <ColorOption key={index} colorInfo={color} onBackgroundColorChange={onColorChange} />
      })}
    </div>
  )
}

export default ColorMenu;