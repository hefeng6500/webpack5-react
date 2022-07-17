import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Home from "./features/Home/Home";
import About from "./features/About/About";

const App = () => {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <hr />
      <Counter />
    </>
  );
};

export default App;
