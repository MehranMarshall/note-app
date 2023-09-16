import React, { useState } from "react";
import { NoteLists } from "./components/NoteLists";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <NoteLists notes={notes} handleNote={addNote} />
    </div>
  );
}

export default App;
