import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <div className='links'>
        <div>
          <NavLink exact={true} to="/">
            <img src={logo} alt='logo' className='logo'/>
          </Link>
        </div>
        <div>
          <NavLink activeClassName="is-active" exact={true} to="/login" className='individual-link'>Login</Link>
          <NavLink activeClassName="is-active" to="/search" className='individual-link'>Search</Link>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;