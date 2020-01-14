import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
<<<<<<< HEAD
import ReviewCard from '../components/ReviewCard.jsx';
=======
import HomeHeroBanner from '../components/HomeHeroBanner';
import { Link } from 'react-router-dom';
>>>>>>> b51651326cd9f608ba52af2cd6c0d74f4111a4ef

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
<<<<<<< HEAD
      const REACT_APP_BACKEND_URL = "https://coffee-back-end.herokuapp.com/";
=======
      const REACT_APP_BACKEND_URL = "https://coffee-back-end.herokuapp.com/reviews";
>>>>>>> b51651326cd9f608ba52af2cd6c0d74f4111a4ef
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