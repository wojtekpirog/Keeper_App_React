function MenuOption(props) {
  return (
    <div role="button">
      <a href={props.link}>
        <img src={props.img} alt={props.alt} />
        <span>{props.span}</span>
      </a>
    </div>
  );
}

export default MenuOption;