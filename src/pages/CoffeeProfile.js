import React from 'react';

// HOOKS
import React, { useState, useEffect } from 'react';

const CoffeeProfile = () => {

  const [reviews, setReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const REACT_APP_BACKEND_URL = "enter URL here";
      const response = await fetch(REACT_APP_BACKEND_URL);
      const data = await response.json();

      setReviews([
        ...reviews,
        ...data
      ]);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1> Coffee Profile </h1>

    </div>
  )
};


export default CoffeeProfile;
