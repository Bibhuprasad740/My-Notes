import React from "react";
import classes from "./NotesHeader.module.css";
import backImage from "../../assets/backButton.png";

const NotesHeader = (props) => {
  let logoTitle = "";
  for (let i = 0; i < 2; i++) {
    logoTitle += props.name[i].toUpperCase();
  }
  return (
    <div className={classes["notes-header"]}>
      <img src={backImage} alt="" />
      <div
        className={classes.logo}
        style={{ backgroundColor: `${props.color}` }}
      >
        {logoTitle}
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default NotesHeader;
