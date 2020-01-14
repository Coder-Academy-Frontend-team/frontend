import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <div className='links'>
        <div>
          <Link to="/">
            <img src={logo} alt='logo' className='logo'/>
          </Link>
        </div>
        <div>
          <Link to="/login" className='individual-link'>Login</Link>
          <Link to="/search" className='individual-link'>Search</Link>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;