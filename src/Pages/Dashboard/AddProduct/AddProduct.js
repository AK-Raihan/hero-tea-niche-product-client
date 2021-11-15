
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from 'react-router-dom';

import Navigation from "../../Shared/Navigation/Navigation";

const AddProduct = () => {


    const location = useLocation();
    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
    
        fetch("https://thawing-beach-65606.herokuapp.com/addProduct", {
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

      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Add Product Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("img", { required: true })}
                placeholder="img link"
                className="p-2 m-2 w-50"
              />
              <input
                {...register("name", { required: true })}
                placeholder="product name"
                className="p-2 m-2 w-50"
              />
              <br />
              <input
                {...register("price", { required: true })}
                placeholder="price"
                className="p-2 m-2 w-50"
              />
              <br />
              <textarea
                {...register("description", { required: true })}
                placeholder="description"
                className="p-2 m-2 w-50"
              />
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Add Product"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddProduct;