import React from "react";
import classes from "./NotesInput.module.css";
import sendButton from "../../assets//sendButton.png";

const NotesInput = (props) => {
  const addNoteHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes["notes-input"]}>
      <input type="text" placeholder="Enter your text here.." />
      <form onSubmit={addNoteHandler}>
        <button type="submit">
          <img src={sendButton} alt="" />
        </button>
      </form>
    </div>
  );
};

export default NotesInput;
