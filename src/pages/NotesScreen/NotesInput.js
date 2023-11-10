import React from "react";
import classes from "./NotesInput.module.css";
import sendButton from "../../assets//sendButton.png";

const NotesInput = (props) => {
  return (
    <div className={classes["notes-input"]}>
      <input type="text" placeholder="Enter your text here.." />
      <form action="">
        <button type="submit">
          <img src={sendButton} alt="" />
        </button>
      </form>
    </div>
  );
};

export default NotesInput;
