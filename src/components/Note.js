import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Note() {
  return (
    <div className="note">
      <span>Hello! This is our first note!</span>
      <div className="note-footer">
        <small>11/05/2023</small>
        <MdDeleteForever className="deleteIcon" size="20px" />
      </div>
    </div>
  );
}
