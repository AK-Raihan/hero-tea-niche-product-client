import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Service from './../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])


    useEffect(()=>{
        fetch('https://thawing-beach-65606.herokuapp.com/shop')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            
            <div className="container py-5">
            <h1 className="text-info">Our Feature Survices is here</h1>
            <div className="row g-4 mt-3">
            {
               services.slice(0,6).map(service=><Service
                    key={service._id}
                    service={service}
                    ></Service>)
            }
            </div>
            <NavLink to="/shop">
            <button className="btn btn-lg btn-outline-info mt-5 w-25">Shoe More</button>
            </NavLink>
        </div>
        </div>
    );
};

export default Services;