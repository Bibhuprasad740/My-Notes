import React from "react";
import classes from "./NoteItem.module.css";

const NoteItem = (props) => {
  const note = props.note;
  return (
    <div className={classes["note-item"]}>
      <div className={classes["date-time"]}>
        <p>{note.date}</p>
        <p>{note.time}</p>
      </div>
      <div className={classes.content}>{note.text}</div>
    </div>
  );
};

export default NoteItem;
