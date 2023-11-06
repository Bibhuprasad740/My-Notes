import React, { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import classes from "./App.module.css";
import MainScreen from "./pages/MainScreen/MainScreen";
import Popup from "./components/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const showCartHandler = () => {
    setShowPopup(true);
  };
  const hideCartHandler = () => {
    setShowPopup(false);
  };
  return (
    <div className="App">
      {showPopup && <Popup onClose={hideCartHandler} />}
      <main>
        <SideBar onShowPopup={showCartHandler} />
        <MainScreen>
          <WelcomeScreen />
        </MainScreen>
      </main>
    </div>
  );
}

export default App;
