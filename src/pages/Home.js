import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import HomeHeroBanner from '../components/HomeHeroBanner';
import { Link } from 'react-router-dom';

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const REACT_APP_BACKEND_URL = "https://coffee-back-end.herokuapp.com/reviews";
      const response = await fetch(REACT_APP_BACKEND_URL);
      const data = await response.json();
      // console.log(data);
      setReviews([
        ...reviews,
        ...data
      ]);
    }
    fetchData();
  }, []);

  return (
    <>
        <p>Home</p>
        <HomeHeroBanner />
        <h1>Latest Reviews</h1>
        <div>
        {reviews.map((review) => {
          return (
            <>
              <Link to={`/coffeeprofile/${review.__id}`}> </Link>
              <p>{review.createdAt}</p>
              <p>{review.rating}</p>
              <p>{review.comment}</p>
              {/* cafe name, location, username */}
            </>
          )
        })}
        </div>
    </>
  )
};

export default Home;