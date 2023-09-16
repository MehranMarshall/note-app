import React from "react";
import Note from "./Note";
import "../stylesheets/Note-Lists.css";
import AddNote from "./AddNote";

export const NoteLists = ({ notes, handleNote }) => {
  return (
    <div className="note-lists">
      {notes.map((note) => {
        return (
          <Note key={note} id={note.id} text={note.text} date={note.date} />
        );
      })}
      <AddNote handleNote={handleNote} />
    </div>
  );
};
