import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Counter } from "./features/Counter/Counter";
import RouterTable from "./routes";

function App() {
  return (
    <>
      <h1>Welcome to React Router!</h1>

      <RouterTable></RouterTable>
      {/* <hr />
      <Counter /> */}
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
