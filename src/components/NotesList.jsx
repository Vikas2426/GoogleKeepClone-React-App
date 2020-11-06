import React from 'react';
import Note from './Note.jsx';

export default function NotesList({ notes, deleteNote }) {

    return (<div>{notes.map((note, index) =>
        <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={deleteNote}
        />

    )}
    </div>
    )


}
