import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import About from './components/About'
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import ClassList from './components/ClassList';
import ClassForm from './components/AddClassForm';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';


function App() {

  const [classList, setClassList] = useState([])
  // const [dropdownLocations, setDropdownLocations] = useState(false);

  // const toggleLocations = () => setDropdownLocations(!dropdownLocations);

  useEffect(() => {
    axios.get('http://anytimefitness.herokuapp.com/api/classes')
      .then(res => {
        setClassList([
          ...classList,
          res.data
        ]);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])
  console.log(classList)
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Anywhere Fitness</h1>
          <Nav pills className="navBar">
            <NavItem>
              <NavLink href="#"><Link className='item' to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><Link className='item' to='/logout'>Logout</Link></NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#"><Link className='item' to='/classlist'>Classes</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><Link className='item' to='/about'>About</Link></NavLink>
            </NavItem>
          </Nav>

        </header>

        <Switch>

          <PrivateRoute path='/logout' component={Logout} />
          <PrivateRoute path='/add-class' component={ClassForm} />
          <Route path='/classlist' component={ClassList} />
          <Route path='/about' component={About} />
          <Route path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
