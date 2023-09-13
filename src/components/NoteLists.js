import React from "react";
import Note from "./Note";
import "../stylesheets/Note-Lists.css";

export const NoteLists = () => {
  return (
    <div className="note-lists">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};
