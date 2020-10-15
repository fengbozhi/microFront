import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "zone.js";

import { registerMicroApps, start, initGlobalState } from "qiankun";

const state = { initA: "000" };

// 初始化 state
const actions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("main-onGlobalStateChange", state, prev);
});
actions.setGlobalState(state);
// actions.offGlobalStateChange();

window.__POWERED_BY_QIANKUN_PARENT__ = true;

registerMicroApps([
  {
    name: "react-sub", // 应用名称
    entry: "//localhost:3000", // 应用地址
    container: "#subContainer", // 嵌入主应用位置
    activeRule: "/sub1", // 匹配规则
    props: {
      aa: 11,
    },
  },
  {
    name: "react-sub2",
    entry: "//localhost:3002",
    container: "#subContainer",
    activeRule: "/sub2",
  },
  {
    name: "angular-sub",
    entry: "//localhost:4200",
    container: "#subContainer",
    activeRule: "/sub3",
    props: {
      aa: 11,
    },
  },
]);

start();

function render(props) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
  console.log(props);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
