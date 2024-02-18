import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function NoteForm({ onSubmit }) {
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

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(note);
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text"
          name="title" 
          placeholder="Title"
          value={note.title}
          onChange={changeNote}
          required
        />      
      </div>
      <div>
        <textarea
          name="content"
          placeholder="Create a note..."
          value={note.content}
          onChange={changeNote}
          rows="3"
          required
        />      
      </div>
      <div>
        <button type="submit">
          <AddIcon htmlColor="#fbbc04" />
          Create
        </button>        
      </div>  
    </form>
  )
}

export default NoteForm;