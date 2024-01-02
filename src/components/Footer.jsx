import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>{year} Keeper App<span className="regSign">&reg;</span></p>
    </footer>
  );
}

export default Footer;