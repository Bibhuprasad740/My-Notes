import React, { useContext, useState } from "react";
import classes from "./NotesScreen.module.css";
import NotesHeader from "./NotesHeader";
import Notes from "./Notes";
import NotesInput from "./NotesInput";
import GroupContext from "../../store/group-context";

const NotesScreen = (props) => {
  const groupContext = useContext(GroupContext);
  let currentGroup;
  for (let group of groupContext.items) {
    if (group.name === props.groupDetails.name) {
      currentGroup = { ...group };
      break;
    }
  }
  const addNotesToGroupHandler = () => {};
  const dummyNotes = [
    { date: "12-06-2023", time: "10 Am", text: "Complete Notes" },
    {
      date: "06-04-2023",
      time: "11 Am",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe adipisci similique dolore natus tempora deserunt magnam consequuntur asperiores, harum provident quisquam impedit ducimus, tempore deleniti, magni doloribus minima corporis ex!",
    },
  ];
  const [notes, setNotes] = useState(dummyNotes);
  return (
    <div className={classes.notes}>
      <div>
        <NotesHeader
          name={props.groupDetails.name}
          color={props.groupDetails.color}
        />
        <Notes notes={notes} />
      </div>
      <NotesInput />
    </div>
  );
};

export default NotesScreen;
