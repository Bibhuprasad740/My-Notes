import React, { useState } from "react";
import classes from "./App.module.css";
import SideBar from "./components/SideBar/SideBar";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import MainScreen from "./pages/MainScreen/MainScreen";
import Popup from "./components/Popup";
import CartProvider from "./store/GroupProvider";
import NotesScreen from "./pages/NotesScreen/NotesScreen";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showScreen, setShowScreen] = useState(<WelcomeScreen />);

  const showCartHandler = () => {
    setShowPopup(true);
  };

  const hideCartHandler = () => {
    setShowPopup(false);
  };

  const changeMainScreenHandler = (groupDetails) => {
    console.log("Change screen is running..");
    setShowScreen(<NotesScreen groupDetails={groupDetails} />);
  };

  return (
    <CartProvider>
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
    </CartProvider>
  );
}

export default App;
