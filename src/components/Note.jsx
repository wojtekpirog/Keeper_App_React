import React from "react";

function Note({id, title, content, deleteFunction}) {

  function deleteNote() {
    deleteFunction(id);
  }

  return (
    <div className="note" >
      <h1>{title}</h1>
      <p>{content}</p>
      <div>
        <button type="button" onClick={deleteNote}>Delete</button>        
      </div>
    </div>
  );
}

export default Note;