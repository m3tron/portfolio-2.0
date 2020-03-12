import React from "react";
//import { BrowserRouter, Switch, Route } from "react-router-dom";

//import Particle from "./components/Particles";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "animate.css";
import "normalize.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
