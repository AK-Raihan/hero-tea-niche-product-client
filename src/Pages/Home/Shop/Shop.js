import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../Home/Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([])


    useEffect(()=>{
        fetch('https://protected-cove-95409.herokuapp.com/shop')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <div className="container py-5">
            <h2>Our products here available</h2>
            <div className="row g-4 mt-3">
            {
                products.map(product=><Product
                    key={product._id}
                    product={product} 
                    ></Product>)
            }
            </div>
        </div>
        </div>
    );
};

export default Shop;