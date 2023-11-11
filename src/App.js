import React, { useContext, useEffect, useState } from "react";
import classes from "./App.module.css";
import SideBar from "./components/SideBar/SideBar";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import MainScreen from "./pages/MainScreen/MainScreen";
import Popup from "./components/Popup";
import NotesScreen from "./pages/NotesScreen/NotesScreen";
import GroupContext from "./store/group-context";
import useStorage from "./hooks/use-storage";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showScreen, setShowScreen] = useState(<WelcomeScreen />);
  const groupContext = useContext(GroupContext);
  const { setItem: setGroups, getItem: fetchGroups, generateId } = useStorage();

  const test = async () => {
    // localStorage.clear();
    // setGroups("groups", dummyGroups);
  };

  const showGroupsHandler = () => {
    setShowPopup(true);
  };

  const hideCartHandler = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    let groups = fetchGroups("groups");
    if (!groups) {
      groups = [];
      setGroups("groups", []);
    }

    groupContext.setItems(groups);

    console.log("useEffect in App.js");
  }, [fetchGroups]);

  const changeMainScreenHandler = (groupDetails) => {
    setShowScreen(<NotesScreen groupDetails={groupDetails} />);
  };

  return (
    <div className="App">
      {showPopup && <Popup onClose={hideCartHandler} />}
      <main>
        <SideBar
          onShowPopup={showGroupsHandler}
          onShowNotes={changeMainScreenHandler}
        />
        <MainScreen>{showScreen}</MainScreen>
      </main>
    </div>
  );
}

export default App;
