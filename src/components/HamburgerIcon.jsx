import MenuIcon from "@mui/icons-material/Menu";

function HamburgerIcon({ onClickFn }) {
  return (
    <div className="hamburger">
      <MenuIcon className="menuIcon" onClick={onClickFn} />
    </div>
  );
}

export default HamburgerIcon;
