import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="icons-container">
        <FaFacebook color="hsl(223, 87%, 63%)" size={30} />
        <FaTwitter color="hsl(223, 87%, 63%)" size={30} />
        <FaInstagram color="hsl(223, 87%, 63%)" size={30} />
      </div>
      <div className="copyright-text">
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
