import { useState } from "react";

import "./App.css";

function App(){
  const [isDark, setIsDark] = useState({
    color: "black",
    "background-color": "white",
    border: " 2px solid  black",
  });
  const changeMode = () => {
    if (document.querySelector(".wrapper").style.color == "black") {
      setIsDark({
        color: "yellow",
        "background-color": "black",
        border: " 2px solid  yellow",
      });
    } else {
      setIsDark({
        color: "black",
        "background-color": "white",
        border: " 2px solid  black",
      });
    }
  };

  return (
    <div className="wrapper" style={isDark}>
      <button className="lightBtn" onClick={changeMode} style={isDark}>
        White Mode
      </button>
      <h1 className="title">WELCOME TO REACT JS</h1>
    </div>
  );
}

export default App;
