import React from 'react';
import './Banner.css'
import banner1 from '../../../images/banner1.jpeg'
import banner2 from '../../../images/banner2.jpeg'
import banner3 from '../../../images/banner3.jpeg'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active banner-carousel ">
            <img src={banner1} className="d-block w-100  " alt="..."/>
            <div className="carousel-caption d-none d-md-block banner-content">
              <button className="btn btn-outline-info fw-bold">Buy Now</button>
              <h1>Quality tea production from Bangladesh</h1>
              <h3>A cup of tea is an excuse to share great thoughts with great minds.</h3>
            </div>
          </div>
          <div className="carousel-item banner-carousel">
            <img src={banner2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block banner-content">
              <button className="btn btn-outline-info fw-bold">Buy Now</button>
              <h1>Enjoy Break Time With Hero Tea</h1>
              <h3>There is something in the nature of tea that leads us into a world of quiet contemplation of life.</h3>
            </div>
          </div>
          <div className="carousel-item banner-carousel">
            <img src={banner3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block banner-content">
              <button className="btn btn-outline-info fw-bold">Buy Now</button>
              <h1>Hero Tea is the best option for your feet body!</h1>
              <h3>The effect of tea is cooling and as a beverage it is most suitable. It is especially fitting for persons of self-restraint and inner worth</h3>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Banner;