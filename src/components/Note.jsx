import React from "react";

function Note({id, title, content, deleteFunction}) {
  return (
    <div className="note" >
      <h1>{title}</h1>
      <p>{content}</p>
      <div>
        <button type="button" onClick={() => deleteFunction(id)}>Delete</button>        
      </div>
    </div>
  );
}

export default Note;