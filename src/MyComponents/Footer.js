import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-yarn">🧶</span>
      <p>
        Made with <span className="heart">♥</span> for crochet lovers &mdash;
        &copy; {new Date().getFullYear()} MyCrochetTodos
      </p>
      <span className="footer-yarn">🌸</span>
    </footer>
  );
};

export default Footer;
