import React from "react";
import classes from "./Notes.module.css";
import NoteItem from "./NoteItem";

const Notes = (props) => {
  return (
    <div className={classes.notes}>
      {props.notes.map((note) => (
        <NoteItem note={note} key={Math.random()} />
      ))}
    </div>
  );
};

export default Notes;
