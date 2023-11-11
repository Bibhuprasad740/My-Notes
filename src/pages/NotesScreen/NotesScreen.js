import React, { useContext, useEffect, useState } from "react";
import classes from "./NotesScreen.module.css";
import NotesHeader from "./NotesHeader";
import Notes from "./Notes";
import NotesInput from "./NotesInput";
import GroupContext from "../../store/group-context";
import useStorage from "../../hooks/use-storage";

const NotesScreen = (props) => {
  const groupContext = useContext(GroupContext);
  const { getItem: fetchNotes, setItem: addNotesToGroupInStorage } =
    useStorage();
  const [notes, setNotes] = useState([]);

  const groupDetails = props.groupDetails;

  useEffect(() => {
    const fetchedNotes = fetchNotes(groupDetails.id);
    if (fetchedNotes && fetchedNotes.length !== 0) {
      setNotes(fetchedNotes);
    } else {
      addNotesToGroupInStorage(groupDetails.id, []);
      setNotes([]);
    }
  }, [addNotesToGroupInStorage, fetchNotes, groupDetails, groupContext.items]);

  const addNotesToGroupHandler = (note) => {
    const updatedNotes = notes.concat(note);

    setNotes(updatedNotes);

    const notesInStorage = fetchNotes(groupDetails.id);
    const updatedNotesInStorage = notesInStorage.concat(note);
    addNotesToGroupInStorage(groupDetails.id, updatedNotesInStorage);
  };

  let contents = <p className={classes.error}>No Notes Found!!</p>;
  if (notes.length !== 0) {
    contents = <Notes notes={notes} />;
  }
  return (
    <div className={classes.screen}>
      <div className={classes.notes}>
        <NotesHeader name={groupDetails.name} color={groupDetails.color} />
        {contents}
      </div>
      <NotesInput onAddNote={addNotesToGroupHandler} />
    </div>
  );
};

export default NotesScreen;
