import React from "react";
import "./App.css";

function App() {
  console.log("sub", localStorage.getItem("mainData"));
  console.log("sub", document.cookie);

  return (
    <div className="App" style={{ border: "4px solid green" }}>
      <div style={{ fontSize: 30 }}>react-sub</div>
      <a href="/sub1/sub2"> sub2</a>
      <div id="sub2container"></div>
    </div>
  );
}

export default App;
