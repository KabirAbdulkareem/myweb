import React, { useState } from "react";
import styles from "./darkModeToggle.module.css";

const DarkModeToggle = () => {
  const [mode, setMode] = useState("dark")
  const toggleMode = ()=>{
    setMode((prev) => (prev === 'dark' ? 'bright':'dark'))
  }
  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode == "dark" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
