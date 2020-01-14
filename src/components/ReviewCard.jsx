import React from 'react'
import '../styles/Review-card.scss';
import { Link } from 'react-router-dom';

class ReviewCard extends React.Component{

    render() {
        const {coffeeType, milkType, photo, rating, comment, index, _id} = this.props
        console.log(this.props)
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
                        <Link to={`/coffeeprofile/${_id}`}> Open Review </Link>
                        </div>
                )
                }
}

export default ReviewCard;