import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesList, setNotesList] = useState([{ title: "", content: "" }]);

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

  return (
    <div>
      <Header />
      <CreateArea createNote={addNote} />
      {/* eslint-disable-next-line  */}
      {notesList.map((note, index) => {
        if (note.title !== "" || note.content !== "")
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              delete={deleteNote}
            />
          );
      })}
      <Footer />
    </div>
  );
}

export default App;
