import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Note({ id, text, date }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever className="deleteIcon" size="20px" />
      </div>
    </div>
  );
}
