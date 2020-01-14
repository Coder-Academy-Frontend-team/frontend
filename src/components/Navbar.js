import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <NavLink activeClassName="is-active" exact={true} to="/">Home</NavLink>
      <NavLink activeClassName="is-active" to="/login">Login</NavLink>
      <NavLink activeClassName="is-active" to="/search">Search</NavLink>
    </>
  )
};

export default Navbar;