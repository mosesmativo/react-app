import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="my-holder mt-2">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
