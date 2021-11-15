import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './ClientReview.css'


const ClientReview = () => {
    const[reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('https://thawing-beach-65606.herokuapp.com/rating')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])

    return (
        <div className="pt-5 container">
      <h2 className="text-center">
        What Our
        <span className="border-3 border-bottom border-warning">
          Clients Say Ab
        </span>
        out Us?
      </h2>

      <div className="row row-cols-1 row-cols-md-3  mt-5 pb-5">
        {reviews.map((review) => (
          <div>
            <div className="col">
              <div
                //   style={{ border: "2px solid #9F7A49" }}
                className="card h-100 shadow pt-3 review-card"
              >
                <img
                  src={review.image}
                  className="mx-auto rounded-circle d-block"
                  width="200px"
                  alt="..."
                />
                <div className="card-body ms-1">
                  <div className="">
                    <div className="pb-2 mt-3 text-center">
                      <h4>{review.name}</h4>
                      <small>
                        <span className="text-second">{review.name}</span>{" "}
                        <span className="px-2">at</span>{" "}
                        <span className="text-warning">Hero tea</span>
                      </small>
                      <p className="card-text text-black-50 text-start">
                        {review.review}
                      </p>
                    </div>

                    <div style={{ color: "#FFA41C" }} className="fw-bolder  ">
                      <Rating
                        initialRating={review.rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ClientReview;