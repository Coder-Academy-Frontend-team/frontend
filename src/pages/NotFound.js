import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      404 - <Link to="/">Go Home</Link>
    </>
  )
}

export default NotFoundPage;