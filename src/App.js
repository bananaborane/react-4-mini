import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from './routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

            {routes}
          
        </div>
      </Router>
    );
  }
}

export default App;
