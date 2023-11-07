import React from "react";

const GroupContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  setItems: () => {},
});

export default GroupContext;
