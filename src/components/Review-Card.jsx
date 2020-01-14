import React from 'react'
import '../styles/Review-Card.scss';

//   function getAllReviews() {
//       return {
//           array.forEach(element => {
              
//           });
//       }
//   }
class Review_Card extends React.Component{
    
    render() {
        const { coffeeType, milkType, photo, rating, comment } = this.props
        return(
            <div className="reviewCard">
                <p>`Coffee: ${coffeeType} milk: ${milkType}`</p>
                <div>{rating}</div>
                <img src="#" className="reviewPhoto">{photo}</img>
                <aside>{comment}</aside>
            </div>
        )
    }
}

export default Review_Card;