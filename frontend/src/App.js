import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';





function App() {


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLocations, setDropdownLocations] = useState(false);


  const toggleClasses = () => setDropdownOpen(!dropdownOpen);
  const toggleLocations = () => setDropdownLocations(!dropdownLocations);

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
            <NavItem>
              <NavLink href="#"><Link className='item' to='/login'>Login</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><Link className='item' to='/register'>Register</Link></NavLink>
            </NavItem>

            <Dropdown nav isOpen={dropdownOpen} toggle={toggleClasses}>
              <DropdownToggle nav caret>
                <span className='item'>Classes</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Zumba</DropdownItem>
                <DropdownItem>Cycling</DropdownItem>
                <DropdownItem>Cross Fit</DropdownItem>
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
          <Route path='/about' component={About} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
