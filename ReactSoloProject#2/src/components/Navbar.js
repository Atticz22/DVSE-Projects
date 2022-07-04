import React from "react";

export default function Navbar() {
  return (
    <nav>
      {/* <img src={require(`../images/mini-globe.png`)} className="nav--logo" /> */}
      <img src={process.env.PUBLIC_URL + "/images/mini-globe.png"} />
      <h4 className="nav--title">my travel journal.</h4>
    </nav>
  );
}
