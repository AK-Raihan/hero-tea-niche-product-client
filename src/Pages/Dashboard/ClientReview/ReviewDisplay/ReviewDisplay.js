import React from 'react';
import useAuth from '../../../../hooks/useAuth/useAuth';

const ReviewDisplay = (props) => {
    const{_id, review, name, image } = props.review;
    const{user}=useAuth();
    console.log(user);
    return (
        <div className="col">
            <div className="card">
            <img  src={image} className="card-img-top w-25 mx-auto rounded-circle" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{review} </p>
            </div>
            </div>
        </div>
    );
};

export default ReviewDisplay;