import React, { useState } from "react";
import ChildrenApp from "./ChildrenApp";

export const ThemeContext = React.createContext();

export default function App() {
  console.log("app");
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <h1>App（親）</h1>
        親の変数のthemeは{theme}です
        <ChildrenApp />
      </div>
    </ThemeContext.Provider>
  );
}
