import React from "react";
import Note from "./Note";
import notes from "../assets/data/notes";

function NoteContainer() {
  // const [notes, setNotes] = useState([]);

  return (
    <main>
      <div className="noteContainer">
        {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} />)}
      </div>      
    </main>
  );
}

export default NoteContainer;