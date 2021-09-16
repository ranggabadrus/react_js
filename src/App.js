import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/User";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
