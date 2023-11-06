import React from "react";
import classes from "./Popup.module.css";
import Modal from "./UI/Modal";
import ColourPickerCircle from "./ColorPickerCircle";

const Popup = (props) => {
  const colors = [
    "blueviolet",
    "pink",
    "skyblue",
    "brown",
    "blue",
    "lightskyblue",
  ];
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.popup}>
        <p>Create New Notes Group</p>
        <div className={classes["input-container"]}>
          <p>Group Name</p>
          <input type="text" />
        </div>
        <div className={classes["input-container"]}>
          <p>Choose Color</p>
          {colors.map((color) => (
            <ColourPickerCircle key={color} color={color} />
          ))}
        </div>
        <div className={classes["popup-footer"]}>
          <button onClick={props.onClose}>Create</button>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
