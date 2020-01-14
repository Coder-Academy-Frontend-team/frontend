import React, {useState, useEffect} from "react";
import {render} from 'react-dom';
import CoffeeTypeDropdown from '../components/CoffeeTypeDropdown';
import Map from '../components/GoogleMap.jsx';
import Router from '../router/ReactRouter';
import { GoogleApiWrapper } from "google-maps-react";

const Search = ()  => {
  const [cafesList, setCafesList] = useState([]);
  const [coffeeTypeSearch, setCoffeeTypeSearch] = useState("Coffee Type ");
  const [cafeSearch, setCafeSearch] = useState('');
  const [displayMenu, setDisplayMenu] = useState(false);

  const cafeSearchInput = (e) => {
    // console.log(e.target.value);
  setCafeSearch(e.target.value)
  }


  return (
    <div>
      <div>
        <h2>Search by:</h2>
        <CoffeeTypeDropdown 
          cafesList={cafesList}
          setCafesList={setCafesList} 
          coffeeTypeSearch={coffeeTypeSearch} 
          setCoffeeTypeSearch={setCoffeeTypeSearch}  
          displayMenu={displayMenu}
          setDisplayMenu={setDisplayMenu}
        />
        <input type="text" placeholder="cafe" defaultValue='' onChange={cafeSearchInput}></input>
        <button type="submit">Search</button>
      </div>
      <Map />
    </div>

  )

}

export default Search;
