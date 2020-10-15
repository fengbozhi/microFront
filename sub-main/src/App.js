import React from "react";
import "./App.css";

function App() {
  localStorage.setItem("mainData", "00000");
  document.cookie = "mainData=111111";

  return (
    <div className="App" style={{ border: "4px solid black" }}>
      <div style={{ fontSize: 30 }}>sub-main</div>
      <p>
        <a href="/sub1">sub1</a>
      </p>
      <p>
        <a href="/sub2">sub2</a>
      </p>
      <a href="/sub3">sub3</a>
      <div id="subContainer"></div>
      <div id="subContainer2"></div>
    </div>
  );
}

export default App;
