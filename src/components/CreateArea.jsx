import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setNewNote(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleClick = event => {
    if (newNote.title !== "" || newNote.content !== "")
      props.createNote(newNote.title, newNote.content);
    event.preventDefault();
    setNewNote({ title: "", content: "" });
    setIsExpanded(!isExpanded);
  };

  const expand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={newNote.title}
            autoComplete='off'
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          onChange={handleChange}
          value={newNote.content}
          onFocus={expand}
        />
        <Zoom in="true">
          <Fab className="form-button" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
