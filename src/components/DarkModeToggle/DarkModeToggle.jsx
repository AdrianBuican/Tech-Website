"use client"

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext, ThemeProvider } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "6px" } : { right: "3px" }}
      />
    </div>
  );
};

export default DarkModeToggle;