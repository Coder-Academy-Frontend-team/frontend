import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/search">Search</Link>
      <SearchBar />
    </>
=======
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
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="is-active" exact={true} to="/login" className='individual-link'>Login</NavLink>
          <NavLink activeClassName="is-active" to="/search" className='individual-link'>Search</NavLink>
        </div>
      </div>
    </nav>
>>>>>>> 32fec89023b181e048f9ea5e47fbfdd043f752f3
  )
};

export default Navbar;