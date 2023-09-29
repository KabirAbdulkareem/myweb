import React, { useContext, useState } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "@/app/context/ThemContext";

const DarkModeToggle = () => {
  /* const [mode, setMode] = useState("dark")
  const toggleMode = ()=>{
    setMode((prev) => (prev === 'dark' ? 'bright':'dark'))
  } */
  const {mode, toggleMode} = useContext(ThemeContext)
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
