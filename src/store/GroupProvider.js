import { useReducer } from "react";
import GroupContext from "./group-context";

const defaultGroupState = {
  items: [],
};

const groupReducer = (state, action) => {
  if (action.type === "ADD") {
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

  const setItemsHandler = (items) => {
    dispatchGroupState({ type: "SET", items: items });
  };

  const addItemToGroupHandler = (item) => {
    dispatchGroupState({ type: "ADD", item: item });
  };

  const removeItemFromGroupHandler = (id) => {
    dispatchGroupState({ type: "REMOVE", id: id });
  };

  const groupContext = {
    items: groupState.items,
    addItem: addItemToGroupHandler,
    removeItem: removeItemFromGroupHandler,
    setItems: setItemsHandler,
  };

  return (
    <GroupContext.Provider value={groupContext}>
      {props.children}
    </GroupContext.Provider>
  );
};

export default GroupProvider;
