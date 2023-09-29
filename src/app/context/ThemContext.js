"use client";

const { createContext, useState } = require("react");

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState("bright")
    const toggleMode = ()=>{
      setMode((prev) => (prev === 'dark' ? 'bright':'dark'))
    }
  return (
    <ThemeContext.Provider value={{mode, toggleMode}}>
      <div className={mode}>
        {children}
    </div>
    </ThemeContext.Provider>
  );
};
