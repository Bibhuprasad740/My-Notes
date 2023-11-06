import React from "react";
import classes from "./MainScreen.module.css";

const MainScreen = (props) => {
  return <div className={classes.main}>{props.children}</div>;
};

export default MainScreen;
