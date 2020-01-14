import React from 'react';
import {render} from 'react-dom';

// import axios from '../axios';
const axios = require('axios')





class SearchBar extends React.Component {

  state = {
    input: ""
  }
  
  async searchName() {

    // I need to access the index endpoint (?) and search through the results. 

    let response = await axios.get(`https://coffee-back-end.herokuapp.com/cafes/name/${this.state.input}`);
    // var cafe 
    let cafes = response.data 
    // .then((response) => {
    //   cafes = response.data
    // for ( cafe in cafes )
    // {
    //   if (cafe.name === input)
    //   {
    //     return cafe 
    //   }
    // }

    // need to figure out how to put this in the right thing for search results to use. 

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
      // the input needs to store the input as a variabl and connect to the button somehow 
      // the button needs an OnClick that calls the searc query function

    )
  }

}

export default SearchBar;