import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';

const Review = () => {
    const[review, setReview]=useState({})

    const{user}=useAuth();

    const location = useLocation();
    const history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        fetch("http://localhost:5000/review", {
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Please drop your review</h2>
            <input
                  {...register("image")}
                  defaultValue={user?.photoURL}
                  className="p-2 m-2 "
                /> <br />
            <input
                  {...register("name", { required: true })}
                  defaultValue={user?.displayName}
                  placeholder="please enter your name"
                  className="p-2 m-2 "
                /> <br />

      <input className="p-5 my-3" {...register("review")} /> <br />


      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    );
};

export default Review;