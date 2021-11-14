import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const{_id,img, name, price, description}=props.product;
    return (
        <div className="col-lg-6 col-md-6 shadow-lg ">
        <div className="card h-100 border-0">
          <div className="card-body">
          <div className="row">
                <div className="col-lg-6">
                <img src={img} className="card-img-top" alt="..."/>
                </div>
                <div className="col-lg-6">
                <p className="card-text">{description}</p>
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">{price}</h5>
                </div>
            </div>
          </div>
          <div className="p-2">
            <NavLink to={`/booking/${_id}`}>
            <button className="btn btn-success w-50">Buy Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Product;