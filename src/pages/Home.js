import React, {useState, useEffect} from 'react';
import HomeHeroBanner from '../components/HomeHeroBanner'
import Navbar from '../components/Navbar';
import ReviewCard from '../components/ReviewCard.jsx';

const Home = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const REACT_APP_BACKEND_URL = "https://coffee-back-end.herokuapp.com/";
      const response = await fetch(REACT_APP_BACKEND_URL);
      const data = await response.json();
      // console.log(data);
      setCoffeeShops([
        ...coffeeShops,
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
        <ReviewCard props={data}/>
            {/* {map and call the components for each one, passing in the review object} */}
        </div>
    </>
  )
};

export default Home;