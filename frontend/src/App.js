import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
          <h1>Anywhere Fitness</h1>
        </header>

        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
