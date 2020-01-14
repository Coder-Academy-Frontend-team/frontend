import React from 'react'
import '../styles/Review-card.scss';

class ReviewCard extends React.Component{
    state = {
            data: null
            }

            async componentDidMount() {
                const response = await fetch('https://coffee-back-end.herokuapp.com/reviews')
                const data = await response.json()
                this.setState({
                    data
                })
            }


    render() {
        const { } = this.state.data
        return(
            <div className="reviewCard">
                {data? data.map((coffeeType, milkType, photo, rating, comment, index) => {
                    return(
                        <div>
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
                }) : null}
            </div>
        )
    }
}

export default ReviewCard;