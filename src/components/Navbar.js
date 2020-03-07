import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img
            className="myFace animated infinite heartBeat"
            src={myFace}
            alt=""
          />
        </Link>
        <ul id="links">
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
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
