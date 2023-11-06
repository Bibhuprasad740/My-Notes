import React, { useState } from "react";
import classes from "./Popup.module.css";
import Modal from "./UI/Modal";
import ColourPickerCircle from "./ColorPickerCircle";
import useNetwork from "../hooks/use-network";

const Popup = (props) => {
  const colors = [
    "blueviolet",
    "pink",
    "skyblue",
    "brown",
    "blue",
    "lightskyblue",
  ];

  const [enteredGroupName, setEnteredGroupName] = useState("");
  const [selectedColor, setSelectetdColor] = useState("blueviolet");
  const { isLoading, hasError, sendRequest } = useNetwork();

  const dummyFunction = () => {};

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredGroupName);
    console.log(selectedColor);
    sendRequest(
      {
        url: "https://notes-app-44a54-default-rtdb.asia-southeast1.firebasedatabase.app/groups.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { color: selectedColor, name: enteredGroupName },
      },
      dummyFunction
    );
  };

  const inputChangeHandler = (event) => {
    setEnteredGroupName(event.target.value);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.popup}>
        <p>Create New Notes Group</p>
        <form onSubmit={formSubmitHandler}>
          <div className={classes["input-container"]}>
            <p>Group Name</p>
            <input
              type="text"
              onChange={inputChangeHandler}
              value={enteredGroupName}
            />
          </div>
          <div className={classes["input-container"]}>
            <p>Choose Color</p>
            {colors.map((color) => (
              <ColourPickerCircle
                key={color}
                color={color}
                onClick={setSelectetdColor}
              />
            ))}
          </div>
          <div className={classes["popup-footer"]}>
            <button type="submit" onClick={props.onClose}>
              Create
            </button>
          </div>
          {hasError && <p style={{ color: "red" }}>Some error occured</p>}
        </form>
      </div>
    </Modal>
  );
};

export default Popup;
