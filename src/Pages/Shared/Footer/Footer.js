import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import logo from '../../../images/logo.png'
import footer1 from '../../../images/footer.jpg'
import footer2 from '../../../images/footer2.jpg'
import footer3 from '../../../images/footer3.jpg'

const Footer = () => {
    return (
        <div className="footer text-white py-5 mb-0 ">
        <div className="container">
        <div className="row">
            <div className="col-lg-4 ">
                <div>
                <div>
                <a className="navbar-brand d-flex justify-content-center align-items-center fs-3 fw-bold text-success" href="/"><img className="logo" src={logo} alt="" />Hero Tea </a>
                </div>
                <p className="text-white">It’s no secret that tea has existed for centuries (with quotes about the beverage existing for just as long), and has only gotten better and more creative with age. Over the thousands of years since tea first originated in China, there have been many words spoken and postulated about this varied beverage.  </p>
                <hr />
                </div>
                <div>
                    <h5>Reach Out</h5>
                    <ul className=" list-unstyled">
                    <li className="text-white"><i className="fas fa-map-marker-alt "></i> BHA gate oposite position,22</li>
                    <li className="text-white"><i className="fas fa-phone-volume"></i> +24 123-456-7878</li>
                    <li className="text-white"><i className="far fa-envelope"></i> info@example.com</li>
                    </ul>
                </div>


            </div>
            <div className="col-lg-4 text-center ">
                <div>
                <h5>Useful Link</h5>
                <li> <Link> Home</Link></li>
                <li> <Link>About us</Link></li>
                <li> <Link>Service</Link></li>
                <li> <Link>Blog</Link></li>
                <li> <Link>News</Link></li>
                <li> <Link>Pricing</Link></li>
                <li> <Link>Shop</Link></li>
                <li> <Link>Pages</Link></li>
                <li> <Link>Shop</Link></li>
                </div>

                <h5>Social contact</h5>
                <div className="social-menu d-flex list-unstyled justify-content-center">                  
                    <li><i className="fab fa-facebook-square"></i></li>
                    <li><i className="fab fa-twitter-square"></i></li>
                    <li><i className="fab fa-instagram-square"></i></li>
                    <li><i className="fab fa-linkedin"></i></li>
                </div>
            </div>

            <div className="col-lg-4">
                <div>
                    <h5>Subscribe Newsletter</h5>
                    <p>Subscribe to our newsletter for new tourst place</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="find a helathy tea" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <div>
                    <h5>Recent News for latest products</h5>
                    <div className="footer-img d-flex justify-content-center">
                        <div>
                        <img src={footer1} alt="" />
                        <h6>Sunset Ice</h6>
                        <p>$7</p>
                        </div>
                        <div>
                        <img src={footer2} alt="" />
                        <h6>Bera Tera</h6>
                        <p>$9</p>
                        </div>
                        <div>
                        <img src={footer3} alt="" />
                        <h6>Milk Olong</h6>
                        <p>$8</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Footer;