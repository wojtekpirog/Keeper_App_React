import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({id, title, content, deleteFunction}) {

  function deleteNote() {
    deleteFunction(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <div>
        <button type="button" onClick={deleteNote}>
          <DeleteIcon htmlColor="#fbbc04" />
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;