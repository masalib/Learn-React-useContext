import React, { useContext } from "react";

//AppコンポーネントからThemeContextをimport
import { ThemeContext } from "./App";

export default function Grandchild() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("Grandchild");
  return (
    <>
      <h3>Grandchildtest</h3>
      <div>現在のテーマは{theme}</div>
      <button onClick={() => setTheme("light")}>Lightに変更する</button>
      <button onClick={() => setTheme("dark")}>Darkに変更する</button>
    </>
  );
}
