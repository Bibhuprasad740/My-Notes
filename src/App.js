import React, { useContext, useEffect, useState } from "react";
import classes from "./App.module.css";
import SideBar from "./components/SideBar/SideBar";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import MainScreen from "./pages/MainScreen/MainScreen";
import Popup from "./components/Popup";
import NotesScreen from "./pages/NotesScreen/NotesScreen";
import GroupContext from "./store/group-context";
import useNetwork from "./hooks/use-network";

function App() {
  const { isLoading, sendRequest: fetchGroups } = useNetwork();
  const [showPopup, setShowPopup] = useState(false);
  const [showScreen, setShowScreen] = useState(<WelcomeScreen />);
  const groupContext = useContext(GroupContext);

  const showCartHandler = () => {
    setShowPopup(true);
  };

  const hideCartHandler = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    fetchGroups(
      {
        url: "https://notes-app-44a54-default-rtdb.asia-southeast1.firebasedatabase.app/groups.json",
      },
      groupContext.setItems
    );
  }, [fetchGroups]);

  const changeMainScreenHandler = (groupDetails) => {
    setShowScreen(<NotesScreen groupDetails={groupDetails} />);
  };

  return (
    <div className="App">
      {showPopup && <Popup onClose={hideCartHandler} />}
      <main>
        <SideBar
          onShowPopup={showCartHandler}
          onShowNotes={changeMainScreenHandler}
        />
        <MainScreen>{showScreen}</MainScreen>
      </main>
    </div>
  );
}

export default App;
