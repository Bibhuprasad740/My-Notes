import React, { useContext, useState } from "react";
import classes from "./Popup.module.css";
import Modal from "./UI/Modal";
import ColourPickerCircle from "./ColorPickerCircle";
import useNetwork from "../hooks/use-network";
import GroupContext from "../store/group-context";
import useStorage from "../hooks/use-storage";

const Popup = (props) => {
  const colors = [
    "blueviolet",
    "pink",
    "skyblue",
    "brown",
    "blue",
    "lightskyblue",
  ];

  const { setItem: addGroup, getItem: getGroups, generateId } = useStorage();
  const [enteredGroupName, setEnteredGroupName] = useState("");
  const [selectedColor, setSelectetdColor] = useState("blueviolet");
  const groupContext = useContext(GroupContext);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredGroupName.trim().length === "") {
      return;
    }

    const groups = getGroups("groups");
    // console.log(groups);

    const newGroup = {
      name: enteredGroupName,
      color: selectedColor,
      id: generateId(),
    };

    const updatedGroups = groups.concat(newGroup);

    addGroup("groups", updatedGroups);
    groupContext.addItem(newGroup);
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
        </form>
      </div>
    </Modal>
  );
};

export default Popup;
