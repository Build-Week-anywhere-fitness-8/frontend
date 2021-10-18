import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* @ unit 2 - feel free to change styling on anything you'd like -monica */}
        <header>
          <h1>Anywhere Fitness</h1>
          <nav>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </nav>
        </header>
        <Switch>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
