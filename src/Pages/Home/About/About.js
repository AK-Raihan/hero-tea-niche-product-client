import React from 'react';
import about from '../../../images/about2.png'
import about1 from '../../../images/about-1.png'
import about2 from '../../../images/about-2-1.png'
import about3 from '../../../images/about-3-1.png'
import about4 from '../../../images/about-4.png'
import about5 from '../../../images/about-5.png'
import about6 from '../../../images/about-6.png'
import './About.css'

const About = () => {
    return (
        <div className="container">
            
                <div className="about-header">
                <h6>About company</h6>
                <h1>Quality hero tea production</h1>
                <p>roduction
                    Integer quis tempor orci. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. <br /> Quisque gravida tempor diam id finibus. Duis non mi augue.</p>
                </div>
            <div className="row">
                <div className="col-lg-2">
                    <img className="bg-success p-3 rounded-circle" src={about1} alt="" />
                    <h4>Highest quality</h4>
                    <p>Integer quis tempor orci. Suspendisse potenti.</p>
                </div>
                <div className="col-lg-2">
                    <img className="bg-success p-3 rounded-circle" src={about2} alt="" />
                    <h4>Pure taste</h4>
                    <p>Integer quis tempor orci. Suspendisse potenti.</p>
                </div>
                <div className="col-lg-2">
                    <img className="bg-success p-3 rounded-circle" src={about3} alt="" />
                    <h4>Wide assortment</h4>
                    <p>Integer quis tempor orci. Suspendisse potenti.</p>
                </div>
                <div className="col-lg-2">
                    <img className="bg-success p-3 rounded-circle" src={about4} alt="" />
                    <h4>Eco package</h4>
                    <p>Integer quis tempor orci. Suspendisse potenti.</p>
                </div>
                <div className="col-lg-2">
                    <img className="bg-success p-3 rounded-circle" src={about5} alt="" />
                    <h4>Gluten free</h4>
                    <p>Integer quis tempor orci. Suspendisse potenti.</p>
                </div>
                <div className="col-lg-2">
                    <img className="bg-success p-3 rounded-circle" src={about6} alt="" />
                    <h4>Without GMO</h4>
                    <p>Integer quis tempor orci. Suspendisse potenti.</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-content text-start">
                    <h1>About The Hero Tea</h1>
                    <p className="text-secondary my-4">At the “Tea Ranch” everyday the tea is prepared, packaged, and shipped with the assurance of the highest quality and best customer service to the tea-lovers around the world.At the “Tea Ranch” everyday the tea is prepared, best customer service to the tea-lovers around the world.packaged, and shipped with the assurance of the highest quality and best customer service to the tea-lovers around the world.</p>
                    <button className="btn btn-lg btn-outline-info">Read More</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;