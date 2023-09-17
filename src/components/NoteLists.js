import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

export const NoteLists = ({ notes, handleNote, deleteNote }) => {
  return (
    <div className="note-lists">
      {notes.map((note) => {
        return (
          <Note
            key={note}
            id={note.id}
            text={note.text}
            date={note.date}
            deleteNote={deleteNote}
          />
        );
      })}
      <AddNote handleNote={handleNote} />
    </div>
  );
};
