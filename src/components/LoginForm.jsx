import React from 'react';
import { useForm } from 'react-hook-form'
import axios from axios;

const LoginForm = (props) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data);

    axios.post("https://coffee-back-end.herokuapp.com/login", data).then((response) => {
      console.log(response.data);
      props.history.push('/');
    });
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" placeholder="username / email" ref={register({ required: true, maxlength: 20 })} />
      <br/>
      <input name="lastName" placeholder="password" ref={register({ required: true })} />
      <br />
      <input type="submit" />
    </form>
  );
};

export default LoginForm;