import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Counter } from "./features/Counter/Counter";
import routes from "./routes";

function App() {
  return (
    <>
      <h1>Welcome to React Router!</h1>

      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} key={index} element={route.element} />
        ))}
      </Routes>

      {/* <React.Suspense
        fallback={
          <>
            <h1>Loading</h1>
          </>
        }
      >
        
      </React.Suspense> */}
      <hr />
      <Counter />
    </>
  );
}

export default App;
