import React, { useState } from "react";
//import { Link } from "react-router-dom";
import myFace from "../assets/images/me.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const barsClass = () => {
    if (!toggle) return "bars";
    return "bars change";
  };

  return (
    <header>
      <nav>
        <a href="/">
          <img className="myFace" src={myFace} alt="" />
        </a>
        <ul id="links">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <div className={barsClass()} onClick={() => setToggle(!toggle)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
