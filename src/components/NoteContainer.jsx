import React, { useState } from "react";
import Note from "./Note";
import NoteForm from "./NoteForm";
// import notes from "../assets/data/notes";

function NoteContainer() {
  const [notes, setNotes] = useState([]);

  function addNote(title, content) {
    setNotes(prevNotes => [...prevNotes, {title: title, content: content}]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((note, index) => {     
      return index !== id;
    }));
  }

  return (
    <main>
      <div className="noteInputContainer">
        <NoteForm onSubmit={addNote} />        
      </div>
      <div className="noteContainer">
        {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} deleteFunction={deleteNote} />)}
      </div>      
    </main>
  );
}

export default NoteContainer;