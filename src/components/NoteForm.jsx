import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
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
          placeholder="Create a note..."
          value={note.content}
          onChange={changeNote}
          rows={isFormExpanded ? "3" : "2"}
          required
        />
      </div>
      <div>
        <Zoom in={isFormExpanded ? true : false} timeout={500} easing="ease-in-out">
          <button type="submit">
            <AddIcon htmlColor="#fff" />
            Create
          </button>
        </Zoom>
      </div>
    </form>
  );
}

export default NoteForm;