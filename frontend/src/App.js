import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About'
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import ClassList from './components/ClassList';
import ClassForm from './components/AddClassForm';

import './App.css';

import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';





function App() {

  const [classList, setClassList] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLocations, setDropdownLocations] = useState(false);


  const toggleClasses = () => setDropdownOpen(!dropdownOpen);
  const toggleLocations = () => setDropdownLocations(!dropdownLocations);

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

  return (

    <Router>

      <div className="App">

        {/* @ unit 2 - feel free to change styling on anything you'd like -monica */}

        <header>
          <h1>Anywhere Fitness</h1>
          <Nav pills className="navBar">
            <NavItem>
              <NavLink href="#"><Link className='item' to="/">Home</Link></NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleClasses}>
              <DropdownToggle nav caret>
                <span className='item'>Classes</span>
              </DropdownToggle>
              <DropdownMenu>
                {classList.map(c => {<DropdownItem>{c.class_name}</DropdownItem>})}
              </DropdownMenu>
            </Dropdown>

            <Dropdown nav isOpen={dropdownLocations} toggle={toggleLocations}>
              <DropdownToggle nav caret>
                <span className='item'>Locations</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem></DropdownItem>
                <DropdownItem>Miami</DropdownItem>
                <DropdownItem>New York</DropdownItem>
                <DropdownItem>California</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink href="#"><Link className='item' to='/about'>About</Link></NavLink>
            </NavItem>
          </Nav>

        </header>

        <Switch>
          <PrivateRoute path='/logout' component={Logout} />
          <PrivateRoute path='/add-class' component={ClassForm}/>
          <Route path='/classlist' component={ClassList}/>
          <Route path='/about' component={About} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
