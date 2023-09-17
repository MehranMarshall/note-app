import React, { useState } from "react";
import "../stylesheets/Note-Lists.css";

export default function AddNote({ handleNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const clickHandler = () => {
    if (noteText.trim().length > 0) {
      handleNote(noteText);
      setNoteText("");
    } else {
      return alert("Enter a Task Please!");
    }
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
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={clickHandler}>
          Save
        </button>
      </div>
    </div>
  );
}
