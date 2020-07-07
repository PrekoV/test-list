import React from "react";
import "./styles/App.scss";
import { Router, Switch, Route } from "react-router";
import { history } from "./store";
import Sale from "./pages/Sale";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/sale" component={Sale} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
