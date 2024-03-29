import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./app";

import store from "./store";
import { Provider } from "react-redux";

import "antd/dist/antd.less";

import { Button } from "antd";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
