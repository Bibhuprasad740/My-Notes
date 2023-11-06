import React from "react";
import SideBar from "./components/SideBar/SideBar";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import classes from "./App.module.css";
import MainScreen from "./pages/MainScreen/MainScreen";

function App() {
  return (
    <div className="App">
      <main>
        <SideBar />
        <MainScreen>
          <WelcomeScreen />
        </MainScreen>
      </main>
    </div>
  );
}

export default App;
