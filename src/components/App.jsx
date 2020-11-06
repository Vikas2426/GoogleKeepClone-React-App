
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import './styles.css';
import notes from '../notes.js';
import NotesList from './NotesList.jsx';

function App() {
  const [notesList, setNotesList] = useState(notes);
  const [searchItem, setSearchItem] = useState("");

  const addNote = (newTitle, newContent) => {
    const newNote = {
      title: newTitle,
      content: newContent
    };

    setNotesList(prevValues => [...prevValues, newNote]);
  };

  const deleteNote = id => {
    setNotesList(prevValues =>
      prevValues.filter((note, index) => index !== id)
    );
  };
  const search = searchText => {
    setSearchItem(searchText);
  }

  return (
    <div>
      <Header searching={search} />
      <CreateArea createNote={addNote} />
      {/* eslint-disable-next-line  */}
    
      <NotesList notes={notesList.filter((note) =>
        (note.title.toLowerCase().includes(searchItem) || note.content.toLowerCase().includes(searchItem)))
      } deleteNote={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
