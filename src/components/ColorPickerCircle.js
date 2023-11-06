import React from "react";
import classes from "./ColorPickerCircle.module.css";

const ColourPickerCircle = (props) => {
  const colorPickerHandler = () => {
    props.onClick(props.color);
  };
  return (
    <div
      style={{ backgroundColor: `${props.color}` }}
      className={classes["color-picker"]}
      onClick={colorPickerHandler}
    ></div>
  );
};

export default ColourPickerCircle;
