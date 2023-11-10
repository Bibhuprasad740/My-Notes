import { useReducer } from "react";
import GroupContext from "./group-context";

const defaultGroupState = {
  items: [],
};

const groupReducer = (state, action) => {
  if (action.type === "SET") {
    let updatedItems = [];
    for (let firebaseKey in action.items) {
      let groupItem = {};
      groupItem.id = firebaseKey;
      for (let key in action.items[firebaseKey]) {
        groupItem[key] = action.items[firebaseKey][key];
      }
      updatedItems.push(groupItem);
    }
    return {
      items: updatedItems,
    };
  } else if (action.type === "ADD") {
    let updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  }
  return defaultGroupState;
};

const GroupProvider = (props) => {
  const [groupState, dispatchGroupState] = useReducer(
    groupReducer,
    defaultGroupState
  );

  const addItemToGroupHandler = (item) => {
    dispatchGroupState({ type: "ADD", item: item });
  };

  const removeItemFromGroupHandler = (id) => {
    dispatchGroupState({ type: "REMOVE", id: id });
  };

  const setItemsHandler = (items) => {
    dispatchGroupState({ type: "SET", items: items });
  };

  const addNotesToGroupHandler = (groupId, note) => {
    dispatchGroupState({ type: "ADD-NOTE", id: groupId, note: note });
  };

  const groupContext = {
    items: groupState.items,
    addItem: addItemToGroupHandler,
    removeItem: removeItemFromGroupHandler,
    setItems: setItemsHandler,
    addNotesToGroup: addNotesToGroupHandler,
  };

  return (
    <GroupContext.Provider value={groupContext}>
      {props.children}
    </GroupContext.Provider>
  );
};

export default GroupProvider;
