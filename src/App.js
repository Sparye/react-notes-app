import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This yeet is ",
      date: "15/06/2021",
    },
    {
      id: nanoid(),
      text: "This second is ",
      date: "14/06/2021",
    },
    {
      id: nanoid(),
      text: "This third is ",
      date: "12/06/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const mode = localStorage.getItem("dark-mode");
    var isTrueSet = mode === "true";
    setDarkMode(isTrueSet);
  }, []);

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  //   useEffect(() => {
  //     const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

  //     if (savedNotes) {
  //       setNotes(savedNotes);
  //     }
  //   }, []);
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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    //   if darkmode is true add class name dark-mode to div
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
