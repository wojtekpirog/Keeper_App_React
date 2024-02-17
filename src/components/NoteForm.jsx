import React, { useState } from "react";

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
        <button type="submit">Create</button>        
      </div>  
    </form>
  )
}

export default NoteForm;