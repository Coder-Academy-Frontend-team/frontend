import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/search">Search</Link>
      <Link to="/review">Add Review</Link>
    </>
  )
};

export default Navbar;