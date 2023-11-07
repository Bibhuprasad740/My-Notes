import React from "react";
import classes from "./NoteItem.module.css";

const NoteItem = (props) => {
  console.log(props.note);
  return (
    <div className={classes["note-item"]}>
      <div className={classes["date-time"]}>
        <p>{props.note.time}</p>
        <p>{props.note.date}</p>
      </div>
      <div className={classes.content}>{props.note.text}</div>
    </div>
  );
};

export default NoteItem;
