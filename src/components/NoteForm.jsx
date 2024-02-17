import React, { useState } from "react";

function NoteForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function changeTitle(e) {
    setTitle(e.target.value);
  }

  function changeContent(e) {
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(title, content);
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          placeholder="Title"
          value={title}
          onChange={changeTitle}
          required
        />      
      </div>
      <div>
        <input 
          type="text"
          placeholder="Create a note..."
          value={content}
          onChange={changeContent}
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