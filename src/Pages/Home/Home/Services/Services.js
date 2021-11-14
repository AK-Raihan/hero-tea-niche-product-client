import React, { useEffect, useState } from 'react';
import Service from './../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/shop')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
<div className="container py-5">
            <h2>Our products here {services.length}</h2>
            <div className="row g-4">
            {
               services.slice(0,6).map(service=><Service
                    key={service._id}
                    service={service}
                    ></Service>)
            }
            </div>
            <button className="btn btn-lg btn-outline-info">Shoe More</button>
        </div>
    );
};

export default Services;