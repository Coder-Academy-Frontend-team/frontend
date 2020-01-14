import React, {useState, useEffect} from 'react';
import ReviewFormComponent from '../components/ReviewForm';

const ReviewForm = () => {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const REACT_APP_BACKEND_URL = "enter url here";
    //     const response = await fetch(REACT_APP_BACKEND_URL);
    //     const data = await response.json();
    //     // console.log(data);
    //     setUsers([
    //       ...users,
    //       ...data
    //     ]);
    //   }
    //   fetchData();
    // }, []);

    return(
        <>
            <h1>Add Review</h1>
            <ReviewFormComponent />
        </>
    )
}



export default ReviewForm