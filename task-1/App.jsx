import { useState } from "react";

import "./App.css";

function App() {
  const [isTrue, setIsTrue] = useState(false);
 const openModal=() => {
  setIsTrue(true);

 }
 
 const closeModal=() => {
  setIsTrue(false);
 }
  return (
    <div>
      <button className="open" onClick={openModal}>Open Modal</button>
      {
        isTrue?(<div className="owerlay">
      <div className="modal">
       <span>Some text in the Modal...</span><a  className="x" onClick={closeModal}>X</a>
      </div>
        
      </div>):""
      }
    </div>
  );
}

export default App;
