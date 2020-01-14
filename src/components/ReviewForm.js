import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

function ReviewForm(props)
 {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data);
    axios.post("https://coffee-back-end.herokuapp.com/review", data).then((response) => {
      console.log(response.data);
      props.history.push('/');
    }).catch(err=> console.log(err));
   };
  
  
  return (

    // "handleSubmit" will validate your inputs before invoking "onSubmit"
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <label><h4>Rating:</h4></label>
      <input name="rating" type="number" min="0" max="5" ref={register} /><br/>
      
      {/* include validation with required or other standard HTML validation rules */}
      <label><h4>Coffee Type:</h4></label>
      <select name="coffeetypes" ref={register({ required: true })}>
        <option value="Cappuccino">Cappuccino</option>
        <option value="Latte">Latte</option>
        <option value="Espresso">Espresso</option>
        <option value="Macchiato">Macchiato</option>
        <option value="Americano">Americano</option>
      </select><br/>

      {/* include validation with required or other standard HTML validation rules */}
      <label><h4>Milk Type:</h4></label>
      <select name="milktypes" ref={register({ required: true })}>
        <option value="None">None</option>
        <option value="FullCream">Full Cream</option>
        <option value="Skinny">Skinny</option>
        <option value="Skim">Skim</option>
      </select><br/>

      {/* include validation with required or other standard HTML validation rules */}
      <label><h4>Comment</h4></label>
      <textarea name="Comment" rows="10" cols="100" ref={register({ required: true })}></textarea><br/>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  )
  
}

export default ReviewForm
