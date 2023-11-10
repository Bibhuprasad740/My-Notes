import React from "react";

const GroupContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  setItems: () => {},
  addNotesToGroup: () => {},
});

export default GroupContext;
