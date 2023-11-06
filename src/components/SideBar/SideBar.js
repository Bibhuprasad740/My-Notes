import React from "react";
import classes from "./SideBar.module.css";
import CreateNotesButton from "./CreateNotesButton";
import GroupsList from "./GroupsList/GroupsList";

const SideBar = (props) => {
  return (
    <div className={classes.sidebar}>
      <h1>Pocket Notes</h1>
      <CreateNotesButton />
      <GroupsList />
    </div>
  );
};

export default SideBar;
