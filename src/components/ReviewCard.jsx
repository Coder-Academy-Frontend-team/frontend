import React from 'react'
import '../styles/Review-card.scss';

/*

function getAllReviews() {
      return {
          array.forEach(element => {
              
          });
      }
  }

  */
class ReviewCard extends React.Component{
    
    render() {
        const { coffeeType, milkType, photo, rating, comment } = this.props
        return(
            <div className="reviewCard">
                <p>Coffeetype{coffeeType} || milktype{milkType}</p>
                <p>Rating{rating}</p>
                <img 
                src={photo} 
                className="reviewPhoto" 
                title=" " 
                alt=" " />
                <aside>{comment}</aside>
            </div>
        )
    }
}

export default ReviewCard;