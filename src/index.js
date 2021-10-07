import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers/reducers";
import App from "./components/App";

// createStore() 裡面放Reducer
let store = createStore(todoApp);

// Provider 為 react-redux 提前準備好的react元件，可以提供一個全域使用store的環境
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
