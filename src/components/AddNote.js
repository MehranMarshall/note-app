import React, { useState } from "react";
import "../stylesheets/Note-Lists.css";

export default function AddNote({ handleNote }) {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const clickHandler = () => {
    handleNote(noteText);
  };
  return (
    <div className="addNote note">
      <textarea
        placeholder="type your note .."
        rows="8"
        cols="10"
        required
        className="area"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button className="save" onClick={clickHandler}>
          Save
        </button>
      </div>
    </div>
  );
}
