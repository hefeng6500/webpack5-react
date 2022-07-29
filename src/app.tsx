import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, Link, Outlet, Router } from "react-router-dom";
import { Counter } from "@/features/counter/counter";
import RouterTable from "./routes";

function App() {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <RouterTable></RouterTable>
      <hr />
      <Counter />
    </>
  );
}

export default App;
