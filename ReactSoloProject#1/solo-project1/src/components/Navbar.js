import React from "react";
import ProfilePicture from "../images/mr-who.jpg";

export default function Navbar() {
  return (
    <nav>
      <img src={ProfilePicture} className="nav--icon" />
    </nav>
  );
}
