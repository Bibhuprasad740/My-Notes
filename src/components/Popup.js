import React from "react";
import classes from "./Popup.module.css";
import Modal from "./UI/Modal";

const Popup = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.popup}>
        <p>Create New Notes Group</p>
        <div className={classes["input-container"]}>
          <p>Group Name</p>
          <input type="text" />
        </div>
        <div>
          <p>Choose Colour</p>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
