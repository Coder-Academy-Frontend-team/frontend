import React from 'react'
import '../styles/Review-card.scss';
import { Link } from 'react-router-dom';

class ReviewCard extends React.Component{

    render() {
        const {coffeeType, milkType, photo, rating, comment, index, _id, createdAt} = this.props.theReview
        console.log(this.props)
        return(
            <div className="reviewCard">
                        <span className="cardTop">{coffeeType} {milkType}</span>
                        <p>{rating}</p>
                        <img 
                        src={photo} 
                        className="reviewPhoto" 
                        title=" " 
                        alt=" " />
                        <aside>{comment}</aside>
                        <Link to={`/coffeeprofile/${_id}`}> Open Review </Link>
                        <p>{createdAt}</p>
                        </div>
                )
                }
}

export default ReviewCard;