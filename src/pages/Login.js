import React, {useState, useEffect} from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const REACT_APP_BACKEND_URL = "enter url here";
        const response = await fetch(REACT_APP_BACKEND_URL);
        const data = await response.json();
        // console.log(data);
        setUsers([
          ...users,
          ...data
        ]);
      }
      fetchData();
    }, []);

    return(
        <>
            <h1>Login page</h1>
            <LoginForm />
        </>
    )
}



export default Login