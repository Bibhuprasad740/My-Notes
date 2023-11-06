import React, { useEffect, useState } from "react";
import classes from "./GroupsList.module.css";
import ListItem from "./ListItem";
import useNetwork from "../../../hooks/use-network";

const GroupsList = (props) => {
  const { isLoading, hasError, sendRequest: fetchGroups } = useNetwork();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    function transformedGroups(data) {
      const fetchedGroups = [];
      for (const groupKey in data) {
        fetchedGroups.push({
          name: data[groupKey].name,
          color: data[groupKey].color,
        });
      }
      setGroups(fetchedGroups);
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
        <ListItem color={group.color} name={group.name} />
      ))}
    </div>
  );
};

export default GroupsList;
