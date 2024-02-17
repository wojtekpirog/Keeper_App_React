import bulbIcon from "../images/lightbulb.svg";
import bellIcon from "../images/bell.svg";
import pencilIcon from "../images/pencil.svg";
import archiveIcon from "../images/archive.svg";
import trashIcon from "../images/trash.svg";

const menuOptions = [
  {
    id: 1,
    link: "https://www.example.com/notes",
    imgSrc: bulbIcon,
    altText: "light bulb icon",
    spanText: "Notes",
  },
  {
    id: 2,
    link: "https://www.example.com/remainders",
    imgSrc: bellIcon,
    altText: "bell icon",
    spanText: "Remainders",
  },
  {
    id: 3,
    link: "https://www.example.com/labels",
    imgSrc: pencilIcon,
    altText: "pencil icon",
    spanText: "Edit labels"
  },
  {
    id: 4,
    link: "https://www.example.com/archive",
    imgSrc: archiveIcon,
    altText: "archive icon",
    spanText: "Archive"
  },
  {
    id: 5,
    link: "https://www.example.com/trash",
    imgSrc: trashIcon,
    altText: "trash icon",
    spanText: "Trash"
  }
];

export default menuOptions;