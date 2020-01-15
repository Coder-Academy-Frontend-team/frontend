import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import SearchBar from './SearchBar';
const Navbar = () => {
  return (
    <nav>
      <div className='links'>
        <div>
          <SearchBar />
          <NavLink exact={true} to="/">
            <img src={logo} alt='logo' className='logo'/>
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="is-active" exact={true} to="/login" className='individual-link'>Login</NavLink>
          <NavLink activeClassName="is-active" to="/search" className='individual-link'>Search</NavLink>
          
        </div>
      </div>
    </nav>
  )
};

export default Navbar;