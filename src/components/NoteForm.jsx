import React, { useState } from "react";
import ColorLensButton from "./ColorLensButton";
import CreateNoteButton from "./CreateNoteButton";
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
        <ColorLensButton isFormExpanded={isFormExpanded} OnColorMenuClick={handleColorMenuClick} />
        {showColorMenu && <ColorMenu onColorChange={handleBackgroundColorChange} />}
        <CreateNoteButton isFormExpanded={isFormExpanded} />
      </div>
    </form>
  );
}

export default NoteForm;