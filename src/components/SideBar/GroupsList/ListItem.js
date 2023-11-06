import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <div className={classes.listitem}>
      <div className={classes.logo}>CU</div>
      <p>Cuvette Notes</p>
    </div>
  );
};

export default ListItem;
