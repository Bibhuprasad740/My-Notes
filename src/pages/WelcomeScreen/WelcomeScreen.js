import React from "react";
import classes from "./WelcomeScreen.module.css";
import backgroundImage from "../../assets/background.png";
import lockImage from "../../assets/lock.png";

const WelcomeScreen = (props) => {
  return (
    <div className={classes.welcome}>
      <img src={backgroundImage} alt="backgroundimage.png" />
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.</p>
      <p>Use Pocket Notes on up to 4 devices and 1 mobile phone.</p>

      {/* <div className={classes.lock}>
        <img src={lockImage} alt="lock.png" />
        <p>end-to-end encrypted</p>
      </div> */}
    </div>
  );
};

export default WelcomeScreen;
