import React, { useEffect, useState } from 'react';
import ReviewDisplay from './ReviewDisplay/ReviewDisplay';

const ClientReview = () => {
    const[reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])

    return (
        <div className="container">
            <h1> Our Happy clients </h1>
            <h2>There are:{reviews.length} client </h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
    
                {
                    reviews.map(review=><ReviewDisplay
                    key={review._id}
                    review={review}
                    ></ReviewDisplay>)
                }
            </div>
            
        </div>
    );
};

export default ClientReview;