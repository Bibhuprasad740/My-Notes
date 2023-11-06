import React from "react";
import classes from "./ColorPickerCircle.module.css";

const ColourPickerCircle = (props) => {
  return (
    <div
      style={{ backgroundColor: `${props.color}` }}
      className={classes["color-picker"]}
    ></div>
  );
};

export default ColourPickerCircle;
