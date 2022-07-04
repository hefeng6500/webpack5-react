import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <div>Hello</div>;
};

function test() {
  return new Promise((resolve) => {
    resolve(123);
  });
}

let a = async function na(params) {
  return await test();
};

console.log(a);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
