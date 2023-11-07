import React, { useContext, useEffect, useState } from "react";
import classes from "./GroupsList.module.css";
import ListItem from "./ListItem";
import useNetwork from "../../../hooks/use-network";
import GroupContext from "../../../store/group-context";

const GroupsList = (props) => {
  const { isLoading, sendRequest: fetchGroups } = useNetwork();
  const [groups, setGroups] = useState([]);
  const groupContext = useContext(GroupContext);

  const showNotesHandler = (name, color) => {
    props.onShowNotes({
      name: name,
      color: color,
    });
  };

  useEffect(() => {
    console.log("useEffect running again...");
    function transformedGroups(data) {
      const fetchedGroups = [];
      for (const groupKey in data) {
        fetchedGroups.push({
          name: data[groupKey].name,
          color: data[groupKey].color,
        });
      }
      setGroups(fetchedGroups);
      groupContext.setItems(fetchedGroups);
    }
    fetchGroups(
      {
        url: "https://notes-app-44a54-default-rtdb.asia-southeast1.firebasedatabase.app/groups.json",
      },
      transformedGroups
    );
  }, [fetchGroups]);
  const loadingText = <p>Loading...</p>;
  return (
    <div className={classes["groups-list"]}>
      {isLoading && loadingText}
      {groups.map((group) => (
        <ListItem
          onClick={showNotesHandler}
          color={group.color}
          name={group.name}
          key={Math.random()}
        />
      ))}
    </div>
  );
};

export default GroupsList;
