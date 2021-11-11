
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Navigation from "../../Shared/Navigation/Navigation";

const Booking = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
  
    useEffect(() => {
      fetch(`http://localhost:5000/singleProduct/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);
  
    console.log(product);
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();




    const onSubmit = (data) => {
    
        fetch("http://localhost:5000/booking", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
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
                  {...register("name")}
                  defaultValue={product?.name}
                  className="p-2 m-2 w-100"
                />
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
                  {...register("comments")}
                  placeholder="comments"
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
                  defaultValue={product?.image}
                  className="p-2 m-2 w-100"
                />
                <br />
                <select {...register("model")} className="p-2 m-2 w-100">
                  <option value={product?.model}>{product?.model}</option>
                  <option value="premium">premium</option>
                  <option value="classic">classic</option>
                  <option value="business">business</option>
                </select>
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