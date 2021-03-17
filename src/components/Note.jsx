import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const handleClick = event => {
    props.delete(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}
        <span id='delete-btn' >
          {<DeleteIcon
            onClick={handleClick}
            id='delete-btn'
          />}
        </span>
      </p>
    </div>
  );
}

export default Note;
