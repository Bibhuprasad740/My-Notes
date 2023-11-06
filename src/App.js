import React from "react";
import SideBar from "./components/SideBar/SideBar";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import classes from "./App.module.css";

function App() {
  return (
    <div className="App">
      <main>
        <SideBar />
        <WelcomeScreen />
      </main>
    </div>
  );
}

export default App;
