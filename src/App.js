import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Particle from "./components/Particles";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
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
        </Switch>
      </BrowserRouter>
      <Particle />
    </>
  );
};

export default App;
