import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Particle from "./components/Particles";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "animate.css";
import "normalize.css";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
      <Particle />
    </>
  );
};

export default App;
