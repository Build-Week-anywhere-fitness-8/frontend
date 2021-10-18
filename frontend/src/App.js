import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Login from './components/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* @ unit 2 - feel free to change styling on anything you'd like -monica */}
        <h1>Anywhere Fitness</h1>
        <Login/>
      </div>
    </Router>
  );
}

export default App;
