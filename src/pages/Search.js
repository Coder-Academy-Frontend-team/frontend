import React, {useState, useEffect} from "react";
import {render} from 'react-dom';
import CoffeeTypeDropdown from '../components/CoffeeTypeDropdown';

import Router from '../router/ReactRouter';



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
  )

}

export default Search;
