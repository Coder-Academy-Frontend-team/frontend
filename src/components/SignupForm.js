import React from "react";

// Hook Form
import { useForm } from "react-hook-form";

// Imported Files
import FileUpload from "./FileUpload.js";

// CSS
import "../styles/SignupForm.css";

const SignupForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    if (data.password == data.confirmPassword) {
      console.log("Hello There");
    } else {
      console.log(
        "Passwords don't match. Please ensure you have typed it in correctly"
      );
    }
  };

  return (
    <div>
      <h1> Sign up </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FileUpload ref={register()} />

        <div>
          <h3> Email Address </h3>
          <input
            placeholder="Please enter in your email"
            name="email"
            type="email"
            ref={register({ required: true })}
          />
        </div>

        <br />

        <div>
          <h3> Password </h3>
          <input
            placeholder="Please enter in a password"
            name="password"
            type="password"
            ref={register({ required: true })}
          />
        </div>

        <div>
          <h3> Confirm your password </h3>
          <input
            placeholder="Please confirm your password"
            name="confirmPassword"
            type="password"
            ref={register({ required: true })}
          />
        </div>

        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default SignupForm;
