import React from 'react'
import '../styles/Review-Card.scss';

  function getAllReviews() {
      return {
          array.forEach(element => {
              
          });
      }
  }
class Review_Card extends React.Component{
    
    getRating() {
        
        return
    }
    
    render() {
        const { coffeeType, milkType, photo, rating, comment } = this.props
        return(
            <div className="reviewCard">
                <h1>Title</h1>
        <div>`Coffee: ${coffeeType} milk: ${milkType}`</div>
                <div>{rating}</div>
                <img src="#" className="reviewPhoto">{photo}</img>
                <aside>{comment}</aside>
                {/* {coffeeType}
                
                {milkType}
                
                {photo}
                
                {rating}
                
                {comment} */}
            </div>
        )
    }
}

export default Review_Card;