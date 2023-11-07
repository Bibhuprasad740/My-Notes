import React, { useContext, useState } from "react";
import classes from "./Popup.module.css";
import Modal from "./UI/Modal";
import ColourPickerCircle from "./ColorPickerCircle";
import useNetwork from "../hooks/use-network";
import GroupContext from "../store/group-context";

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
  const groupContext = useContext(GroupContext);

  const dummyFunction = (newItemId) => {
    console.log(newItemId);
    const addedGroup = {
      key: newItemId,
      color: selectedColor,
      name: enteredGroupName,
      contents: {},
    };
    groupContext.addItem(addedGroup);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredGroupName.trim().length === "") {
      return;
    }
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
    props.onClose();
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
            <button type="button" onClick={formSubmitHandler}>
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
