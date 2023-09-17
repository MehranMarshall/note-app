import React, { useState } from "react";
import "./stylesheets/Note-Lists.css";
import { NoteLists } from "./components/NoteLists";
import { nanoid } from "nanoid";
import { Search } from "./components/Search";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: `${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()}`,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const removeNote = notes.filter((note) => note.id !== id);
    setNotes(removeNote);
  };

  return (
    <div className="container">
      <Search searchText={setSearchText} />
      <NoteLists
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleNote={addNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
