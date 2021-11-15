import React  from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';

const Review = () => {

    const{user}=useAuth();

    const location = useLocation();
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        fetch("https://thawing-beach-65606.herokuapp.com/review", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
                if(result.insertedId){
                console.log(result.insertedId)
                const destination = location?.state?.from || '/';
                history.replace(destination);
                }
            });
    } 

    return (
        <div className="review-form bg-secondary w-50 mx-auto p-5 rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Please drop your review</h2>
            <input
                  {...register("image")}
                  defaultValue={user?.photoURL}
                  className="p-2 m-2 rounded"
                /> <br />
            <input
                  {...register("name")}
                  defaultValue={user?.displayName}
                  placeholder="please enter your name"
                  className="p-2 m-2 rounded"
                /> <br />
            <input
                  {...register("rating", { required: true })}
                  placeholder="Please Rate a value max-5"
                  className="p-2 m-2 rounded "
                /> <br />

      <textarea className="p-5 my-3 rounded" placeholder="write your feedback" {...register("review")} /> <br />


      {errors.exampleRequired && <span>This field is required</span>}
      
      <input className="py-2 px-5 bg-success rounded" type="submit" />
    </form>
        </div>
    );
};

export default Review;