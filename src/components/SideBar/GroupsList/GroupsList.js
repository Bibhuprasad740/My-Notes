import React, { useContext, useEffect, useState } from "react";
import classes from "./GroupsList.module.css";
import ListItem from "./ListItem";
import GroupContext from "../../../store/group-context";
import useStorage from "../../../hooks/use-storage";

const GroupsList = (props) => {
  const { setItem: addGroup, getItem: getGroups, generateId } = useStorage();
  const [groups, setGroups] = useState([]);
  const groupContext = useContext(GroupContext);

  const showNotesHandler = (name, color, id) => {
    props.onShowNotes({
      name: name,
      color: color,
      id: id,
    });
  };

  useEffect(() => {
    console.log("useEffect in GroupList");
    function transformedGroups(fetchedGroups) {
      setGroups(fetchedGroups);
    }
    const groups = getGroups("groups");
    transformedGroups(groups);
  }, [getGroups, groupContext.items]);
  return (
    <div className={classes["groups-list"]}>
      {groups.map((group) => (
        <ListItem
          onClick={showNotesHandler}
          color={group.color}
          name={group.name}
          id={group.id}
          key={group.id}
        />
      ))}
    </div>
  );
};

export default GroupsList;
