import React, {useState, useEffect} from "react";
import {render} from 'react-dom';
import CoffeeTypeDropdown from '../components/CoffeeTypeDropdown';
import Map from '../components/GoogleMap.jsx';
import axios from "axios";
import Router from '../router/ReactRouter';
import Geocode from "react-geocode";
import GoogleMap from "../components/GoogleMap.jsx";
import styles from "./Search.module.css";
require('dotenv').config();

const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

Geocode.setApiKey(googleApiKey);
Geocode.setLanguage("en");


const Search = ()  => {

  const [cafeDisplayChange, setDisplayChange] = useState(true);
  const [cafesList, setCafesList] = useState([]);
  const [coffeeTypeSearch, setCoffeeTypeSearch] = useState("Coffee Type ");
  const [cafeSearch, setCafeSearch] = useState('');
  const [displayMenu, setDisplayMenu] = useState(false);
  const [cafeCoordinates, getCoordinates] = useState({latitude: -37.8182119, longitude: 144.9543325})

  const cafeSearchInput = (e) => {
    console.log(e.target.value);
  setCafeSearch(e.target.value)
  }

  useEffect( () => {
      axios.get(process.env.REACT_APP_BACKEND_URL + '/cafes')
      .then((res) => {
        // console.log(res.data);
        setCafesList([
          ...cafesList,
          ...res.data
        ])
      // console.log(cafesList)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

const changeCoordinates = (e) => {
    let cafeLocation = e.currentTarget.getAttribute("value");
    Geocode.fromAddress(cafeLocation)
    .then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      getCoordinates({latitude: lat, longitude: lng})
    },
    error => {
      console.error(error);
    }
  )
};

  const cafesListDisplay = () => {
    let coffeeType = coffeeTypeSearch;
    let cafeName = cafeSearch;
    console.log(coffeeType)
    if (coffeeType !== (null || '') ) {    
      axios.get(process.env.REACT_APP_BACKEND_URL + '/coffee/' + coffeeType)
          .then((res) => {
      setCafesList([...res.data])
    })
    .catch((err) => {
      console.log(err);
    })
  } 

  if (cafeName !== (null || '') ) {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/cafe/' + cafeName)
    .then((res) => {
      setCafesList([...res.data])
    })
    .catch((err) => {
      console.log(err);
    })

  }

  }

  return (
    <div className={styles.container}>

      <div className={styles.searchResults}>
        <h2>Search by:</h2>
        <CoffeeTypeDropdown 
          coffeeTypeSearch={coffeeTypeSearch} 
          setCoffeeTypeSearch={setCoffeeTypeSearch}  
          displayMenu={displayMenu}
          setDisplayMenu={setDisplayMenu}

        />
        <input type="text" placeholder="cafe" defaultValue='' onChange={cafeSearchInput}></input>
        <button type="submit" onClick={cafesListDisplay}>Search</button>
  
        <div className={styles.cafeInfo}> 
          {cafesList.map((cafe, i) => {
            // console.log(cafe);
            let cafeLocation = cafe.location
            return (
            <div key={i}  value={cafe.location} onClick={changeCoordinates}>
              <p>{cafe.name}</p>
              <img src={cafe.image} width="100" height="100"></img>
              <p>{cafe.location}</p>
            </div>
            )
          })}
        </div>
      </div>
      <div className={styles.map}>
        <GoogleMap latitude={cafeCoordinates.latitude} longitude={cafeCoordinates.longitude}
      />
      </div>


    </div>

  )
}

export default Search;
