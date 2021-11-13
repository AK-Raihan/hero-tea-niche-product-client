import React from 'react';
import useAuth from '../../../../hooks/useAuth/useAuth';

const ReviewDisplay = (props) => {
    const{_id, review, name, image } = props.review;
    const{user}=useAuth();
    console.log(user);
    return (
        <div class="col">
            <div class="card">
            <img  src={image} class="card-img-top w-25 mx-auto rounded-circle" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{review} </p>
            </div>
            </div>
        </div>
    );
};

export default ReviewDisplay;