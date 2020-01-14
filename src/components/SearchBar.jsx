import React from 'react';
import {render} from 'react-dom';

// import axios from '../axios';
const axios = require('axios')





class SearchBar extends React.Component {

  state = {
    input: ""
  }
  
  async searchName() {

    

    let response = await axios.get(`https://coffee-back-end.herokuapp.com/cafes/name/${this.state.input}`);
   
    let cafes = response.data 
     

     return cafes

  }

  async searchLocation(input) {
    let response = await axios.get(`https://coffee-back-end.herokuapp.com/cafes/location/${input}`)

    let cafes = response.data 

    return cafes
  }

  setValue = (event) => 
  {
    this.setState({input: event.target.value});

  }
  

  render() {

    return (
      <form>
        <input
          type="text"
          placeholder="Search"
          // onKeyDown={this.searchName}  
          onChange={this.setValue}        
        />
        {/* <button onClick={this.searchName}>Search</button> */}
        <button onClick={this.searchName}>Search</button>

        
      </form>
      

    )
  }

}

export default SearchBar;