import React from "react";

export default function About() {
  return (
    <main id="main--content">
      <h1 id="nav--profilename">Mr Who</h1>
      <h3 id="nav--role">Frontend Developer</h3>
      <a id="nav--website" href="#">
        mr_who.website
      </a>
      <button id="button--email">Email</button>
      <button id="button--linkedin">LinkedIn</button>
      <div id="trivia--box">
        <h3>About</h3>
        <p>I'm a frontend developer.</p>
        <h3>Interests</h3>
        <p>Sports, food, movies.</p>
      </div>
    </main>
  );
}
