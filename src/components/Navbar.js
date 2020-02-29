import React from "react";
import { Link } from "react-router-dom";
import myFace from "../assets/images/me.png";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="">
          <img
            className="myFace animated infinite heartBeat"
            src={myFace}
            alt=""
          />
        </div>
        <div id="links">
          <ul>
            <li>
              <Link to="/about">About Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
