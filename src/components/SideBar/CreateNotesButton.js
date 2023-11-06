import React from "react";
import classes from "./CreateNotesButton.module.css";

const CreateNotesButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      + Create Notes Group
    </button>
  );
};

export default CreateNotesButton;
