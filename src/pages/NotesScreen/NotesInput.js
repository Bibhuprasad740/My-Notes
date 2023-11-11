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
    const id = generateId();
    const [date, time] = id.split("at");

    props.onAddNote({ date, time, text: note });

    setNote("");
  };

  return (
    <div className={classes["notes-input"]}>
      <input
        type="text"
        placeholder="Enter your text here.."
        onChange={noteInputChangeHandler}
        value={note}
      />
      <form onSubmit={addNoteHandler}>
        <button type="submit">
          <img src={sendButton} alt="" />
        </button>
      </form>
    </div>
  );
};

export default NotesInput;
