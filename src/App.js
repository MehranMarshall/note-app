import React, { useEffect, useState } from "react";
import "./stylesheets/Note-Lists.css";
import { NoteLists } from "./components/NoteLists";
import { nanoid } from "nanoid";
import { Search } from "./components/Search";
import { Header } from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // save to locale storage
  useEffect(() => {
    localStorage.setItem(-"react-note-app-data", JSON.stringify(notes));
  }, []);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-note-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Functions
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
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search searchText={setSearchText} />
        <NoteLists
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
