import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  let logoTitle = "";
  for (let i = 0; i < 2; i++) {
    logoTitle += props.name[i].toUpperCase();
  }
  return (
    <div className={classes.listitem}>
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
