import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const{_id,img, name, price, description}=props.product;
    return (
        <div class="col-lg-6 col-md-6 shadow-lg ">
        <div class="card h-100 border-0">
          <div class="card-body">
          <div className="row">
                <div className="col-lg-6">
                <img src={img} class="card-img-top" alt="..."/>
                </div>
                <div className="col-lg-6">
                <p class="card-text">{description}</p>
                <h5 class="card-title">{name}</h5>
                <h5 class="card-title">{price}</h5>
                </div>
            </div>
          </div>
          <div class="p-2">
            <NavLink to={`/booking/${_id}`}>
            <button className="btn btn-success w-50">Buy Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Product;