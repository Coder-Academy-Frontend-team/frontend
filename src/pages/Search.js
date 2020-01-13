import React from "react";
import {render} from 'react-dom'

import ReactRouter from './router/ReactRouter'

class Search extends React.Component {

  state = {
    cafesList = [],
  }
  
  componentDidMount() {
    //load all cafes here
  }



  render() {
    return( 
// Search form goes here
<h1> Search Page</h1>
    )
  }
}

export default Search;
