import { useState } from "react";

import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const changeMode = () => {
    setIsDark(!isDark);
  };

const dark={
  color: "yellow",
  "background-color": "black",
  "border-color": "  yellow",
}
const light={
  color: "black",
  "background-color": "white",
  "border-color": " black",
}

  return (
    <div
      className="wrapper"
      style={isDark?dark:light}
    >
      <button
        className="lightBtn"
        onClick={changeMode}
        style={isDark?dark:light}
      >
        White Mode
      </button>
      <h1 className="title">WELCOME TO REACT JS</h1>
    </div>
  );
}

export default App;
