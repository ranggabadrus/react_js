import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/User";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
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
    </Provider>
  );
}
