import bulbIcon from "../images/lightbulb.svg";
import bellIcon from "../images/bell.svg";
import pencilIcon from "../images/pencil.svg";
import archiveIcon from "../images/archive.svg";
import trashIcon from "../images/trash.svg";

const menuOptions = [
  {
    link: "https://www.example.com/notes",
    imgSrc: bulbIcon,
    altText: "light bulb icon",
    spanText: "Notatki",
  },
  {
    link: "https://www.example.com/remainders",
    imgSrc: bellIcon,
    altText: "bell icon",
    spanText: "Przypomnienia",
  },
  {
    link: "https://www.example.com/labels",
    imgSrc: pencilIcon,
    altText: "pencil icon",
    spanText: "Edytuj etykiety"
  },
  {
    link: "https://www.example.com/archive",
    imgSrc: archiveIcon,
    altText: "archive icon",
    spanText: "Archiwum"
  },
  {
    link: "https://www.example.com/trash",
    imgSrc: trashIcon,
    altText: "trash icon",
    spanText: "Kosz"
  }
];

export default menuOptions;