import React from "react";
import "./App.css";

function App() {
  console.log("sub2", localStorage.getItem("mainData"));
  console.log("sub2", document.cookie);
  return (
    <div className="App" style={{ border: "4px solid red" }}>
      <div style={{ fontSize: 30 }}>react-sub2</div>
    </div>
  );
}

export default App;
