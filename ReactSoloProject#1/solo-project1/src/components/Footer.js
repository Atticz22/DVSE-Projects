import React from "react";
import GitHubIcon from "../images/GitHub.png";
import InstagramIcon from "../images/Instagram Icon.png";
import FacebookIcon from "../images/Facebook Icon.png";
import TwitterIcon from "../images/Twitter Icon.png";

export default function Footer() {
  return (
    <footer id="content--footer">
      <img src={TwitterIcon} id="footer--image1" />
      <img src={FacebookIcon} id="footer--image2" />
      <img src={InstagramIcon} id="footer--image3" />
      <img src={GitHubIcon} id="footer--image4" />
    </footer>
  );
}
