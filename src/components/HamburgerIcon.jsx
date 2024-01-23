function HamburgerIcon({img, onClickFn}) {
  return (
    <div className="hamburger">
      <img src={img} alt="hamburger icon" onClick={onClickFn} />
    </div>
  );
}

export default HamburgerIcon;