import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// 项目挂载
function render(props) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("sub2root")
  );
  console.log(props);
}

// 子应用独立运行判断
if (!window.__POWERED_BY_QIANKUN_PARENT__) {
  render();
}

// 只会在子应用初始化的时候调用一次
export async function bootstrap() {
  console.log("react-sub2 bootstraped");
}

// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
  console.log("react-sub2 props from main framework", props);
  render(props);
}

// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#sub2root")
      : document.querySelector("#sub2root")
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
