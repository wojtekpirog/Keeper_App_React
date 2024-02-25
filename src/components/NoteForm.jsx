import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Zoom from "@mui/material/Zoom";

function NoteForm({ onSubmit }) {
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function changeNote(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function expandForm() {
    setIsFormExpanded(true);
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
          <Tooltip className="tooltip" title="Background color" arrow={true} followCursor>
            <button type="button">
              <ColorLensIcon htmlColor="#fff" title="Change color" />
            </button>            
          </Tooltip>
        </Zoom>        
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