import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "react-sub2", // app name registered
    entry: "//localhost:3002",
    container: "#sub2container",
    activeRule: "sub1/sub2",
  },
]);

start();

function render(props) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("subRoot")
  );
  console.log(props);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props) {
  console.log("react-sub bootstraped", props);
}

export async function mount(props) {
  console.log("react-sub props from main framework", props);

  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log("react-sub onGlobalStateChange", state, prev);
  });

  props.setGlobalState({ initA: "999" });

  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#subRoot")
      : document.querySelector("#subRoot")
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
