import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";
import NextEvents from "./nextEvents";
import PastEvents from "./pastEvents";
import Gallery from "./gallery";
import Contact from "./contact";
import Login from "./login";
import Help from "./help";
import Privacy from "./privacy";
import Cookies from "./cookies";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/nextEvents" component={NextEvents} />
    <Route exact path="/pastEvents" component={PastEvents} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/help" component={Help} />
    <Route exact path="/privacy" component={Privacy} />
    <Route exact path="/cookies" component={Cookies} />
  </Switch>
);

export default Main;
