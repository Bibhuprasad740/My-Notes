import React, { useContext, useEffect, useState } from "react";
import classes from "./NotesScreen.module.css";
import NotesHeader from "./NotesHeader";
import Notes from "./Notes";
import NotesInput from "./NotesInput";
import GroupContext from "../../store/group-context";
import useStorage from "../../hooks/use-storage";

const dummyNotes = [
  { date: "12-06-2023", time: "10 Am", text: "Complete Notes" },
  {
    date: "12-06-2023",
    time: "10 Am",
    text: "Complete Notes jfaljflfjlajfaj lfj jjjjjjjjjjjjlafjal flajfljaf jfj lfj fal jfla jfaj af fj fj ajfajfjafj lafj afj jf jasfj afjajfj Complete Notes jfaljflfjlajfaj lfj jjjjjjjjjjjjlafjal flajfljaf jfj lfj fal jfla jfaj af fj fj ajfajfjafj lafj afj jf jasfj afjajfjComplete Notes jfaljflfjlajfaj lfj jjjjjjjjjjjjlafjal flajfljaf jfj lfj fal jfla jfaj af fj fj ajfajfjafj lafj afj jf jasfj afjajfjComplete Notes jfaljflfjlajfaj lfj jjjjjjjjjjjjlafjal flajfljaf jfj lfj fal jfla jfaj af fj fj ajfajfjafj lafj afj jf jasfj afjajfjComplete Notes jfaljflfjlajfaj lfj jjjjjjjjjjjjlafjal flajfljaf jfj lfj fal jfla jfaj af fj fj ajfajfjafj lafj afj jf jasfj afjajfjComplete Notes jfaljflfjlajfaj lfj jjjjjjjjjjjjlafjal flajfljaf jfj lfj fal jfla jfaj af fj fj ajfajfjafj lafj afj jf jasfj afjajfj",
  },
];

const NotesScreen = (props) => {
  const { getItem: fetchNotes, setItem, generateId } = useStorage();
  const groupContext = useContext(GroupContext);
  const [notes, setNotes] = useState(dummyNotes);

  console.log(props.groupDetails);

  useEffect(() => {
    fetchNotes(props.groupDetails.id, setNotes);
  }, [fetchNotes, props.groupDetails.id]);

  // useEffect(() => {
  //   console.log(groupContext.items);
  // }, []);

  // const addNotesToGroupHandler = () => {};

  let contents = <p className={classes.error}>No Notes Found!!</p>;
  if (notes) {
    contents = <Notes notes={notes} />;
  }
  return (
    <div className={classes.screen}>
      <div className={classes.notes}>
        <NotesHeader
          name={props.groupDetails.name}
          color={props.groupDetails.color}
        />
        {contents}
      </div>
      <NotesInput />
    </div>
  );
};

export default NotesScreen;
