import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  let logoTitle = "";
  for (let i = 0; i < 2; i++) {
    logoTitle += props.name[i].toUpperCase();
  }
  const showNotesHandler = () => {
    props.onClick(props.name, props.color, props.id);
  };
  return (
    <div className={classes.listitem} onClick={showNotesHandler}>
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

export default ListItem;
