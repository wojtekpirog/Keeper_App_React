import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import ColorLensButton from "./ColorLensButton";

function Note({id, title, content, deleteFunction}) {

  function deleteNote() {
    deleteFunction(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <div>
        <EditButton />
        <DeleteButton onNoteDelete={deleteNote} />
        <ColorLensButton isFormExpanded="true" iconColor="#fbbc04" />
      </div>
    </div>
  );
}

export default Note;