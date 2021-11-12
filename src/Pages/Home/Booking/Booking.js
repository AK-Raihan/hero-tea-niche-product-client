
import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const Booking = () => {
    const{user}=useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    // console.log(user);

    const location = useLocation();
    const history = useHistory();
  
    useEffect(() => {
      fetch(`http://localhost:5000/singleProduct/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);
  
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();




    const onSubmit = (data) => {
    
        fetch("http://localhost:5000/confirmOrder", {
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
      };
    return (
        <div>
          <Navigation></Navigation>
        <h1>THis is Booking</h1>
  
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="details-img">
                <img className="w-75" src={product?.img} alt="" />
              </div>
              <h2>{product?.name}</h2>
              <p className="text-start">{product?.description}</p>
              <h1> price: {product?.price} </h1>

            </div>
            <div className="col-md-6">
              <h1>booking Form</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("user")}
                  defaultValue={user?.displayName}
                  className="p-2 m-2 w-100"
                />
                <input
                  {...register("email")}
                  defaultValue={user?.email}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("name")}
                  defaultValue={product?.name}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("date")}
                  // placeholder="Name"
                  type="date"
                  className="p-2 m-2 w-100"
                />
                <br />
                
  
                <input
                  {...register("price", { required: true })}
                  defaultValue={product?.price}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("image", { required: true })}
                  defaultValue={product?.img}
                  className="p-2 m-2 w-100"
                />
                <br />
                <textarea
                  {...register("comments")}
                  placeholder="comments"
                  className="p-2 m-2 w-100"
                />
                <br />
  
                {errors.exampleRequired && <span>This field is required</span>}
  
                <input
                  type="submit"
                  value="Order Confirm"
                  className="btn btn-info w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Booking;