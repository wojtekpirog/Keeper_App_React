import React from "react";
import DeleteButton from "./DeleteButton";

function Note({id, title, content, deleteFunction}) {

  function deleteNote() {
    deleteFunction(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <div>
        <DeleteButton onNoteDelete={deleteNote} />
      </div>
    </div>
  );
}

export default Note;