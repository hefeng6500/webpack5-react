import React, { Suspense } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Counter } from "./features/Counter/Counter";
import routes from "./routes";

const App = () => {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <Routes>
        {routes.map((route, index) => (
          <Route
            path={route.path as string}
            key="index"
            element={route.element}
          />
        ))}
      </Routes>
      <hr />
      <Counter />
    </>
  );
};

export default App;
