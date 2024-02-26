import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Zoom from "@mui/material/Zoom";
import ColorMenu from "./ColorMenu";

function NoteForm({ onSubmit }) {
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [showColorMenu, setShowColorMenu] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: "#fff"
  });

  function changeNote(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function expandForm() {
    setIsFormExpanded(true);
  }

  function handleColorMenuClick() {
    setShowColorMenu(!showColorMenu);
  }

  function handleBackgroundColorChange(backgroundColor) {
    setNote((prevNote) => {
      return {
        ...prevNote,
        color: backgroundColor
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(note);
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <form onSubmit={handleSubmit} onClick={expandForm}>
      <div>
        {isFormExpanded && (
          <input
            type="text"
            name="title"
            className="noteFormInput"
            placeholder="Title"
            value={note.title}
            onChange={changeNote}
            required
          />
        )}
      </div>
      <div>
        <textarea
          name="content"
          className="noteFormInput"
          placeholder="Create a note..."
          value={note.content}
          onChange={changeNote}
          rows={isFormExpanded ? "3" : "2"}
          required
        />
      </div>
      <div>
        <Zoom in={isFormExpanded ? true : false} timeout={500} easing="ease-in-out">
          <Tooltip title="Background color" arrow={true}>
            <button type="button" onClick={handleColorMenuClick}>
              <ColorLensIcon htmlColor="#fff" title="Change color" />
            </button>
          </Tooltip>
        </Zoom>
        {showColorMenu && (
          <ColorMenu onColorChange={handleBackgroundColorChange} />
        )}
        <Zoom in={isFormExpanded ? true : false} timeout={500} easing="ease-in-out">
          <button type="submit" title="Create">
            <AddIcon htmlColor="#fff" />
            Create
          </button>
        </Zoom>
      </div>
    </form>
  );
}

export default NoteForm;