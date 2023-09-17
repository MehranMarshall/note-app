import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Note({ id, text, date, deleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => deleteNote(id)}
          className="deleteIcon"
          size="20px"
        />
      </div>
    </div>
  );
}
