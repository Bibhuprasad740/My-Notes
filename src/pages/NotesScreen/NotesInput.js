import React, { useState } from "react";
import classes from "./NotesInput.module.css";
import sendButton from "../../assets//sendButton.png";
import useStorage from "../../hooks/use-storage";

const NotesInput = (props) => {
  const { generateId } = useStorage();
  const [note, setNote] = useState("");

  const noteInputChangeHandler = (event) => {
    setNote(event.target.value);
  };

  const addNoteHandler = (event) => {
    event.preventDefault();
    if (note.trim().length === 0) {
      return;
    }
    const id = generateId();
    const [date, time] = id.split("at");

    props.onAddNote({ date, time, text: note });

    setNote("");
  };

  return (
    <form className={classes["notes-input"]} onSubmit={addNoteHandler}>
      <input
        type="text"
        placeholder="Enter your text here.."
        onChange={noteInputChangeHandler}
        value={note}
      />
      <button type="submit">
        <img src={sendButton} alt="" />
      </button>
    </form>
  );
};

export default NotesInput;
