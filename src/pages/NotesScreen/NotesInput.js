import React from "react";
import classes from "./NotesInput.module.css";
import sendButton from "../../assets//sendButton.png";

const NotesInput = (props) => {
  return (
    <div className={classes["notes-input"]}>
      <input type="text" placeholder="Enter your text here.." />
      <img src={sendButton} alt="" />
    </div>
  );
};

export default NotesInput;
