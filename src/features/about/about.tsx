import React from "react";
import { Link } from "react-router-dom";
import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <main>
        <h2 className={styles.h2}>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
