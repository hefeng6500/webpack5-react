import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Home() {
  return (
    <>
      <main>
        <Loading />
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
