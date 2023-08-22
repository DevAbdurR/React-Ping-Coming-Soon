import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

function Header() {
  return (
    <div className="header">
      <Logo />
      <h2 className="heading font-light">
        We are Launching <span className="font-bold">soon!</span>
      </h2>
      <p>Subscribe and get notified</p>
    </div>
  );
}

export default Header;
