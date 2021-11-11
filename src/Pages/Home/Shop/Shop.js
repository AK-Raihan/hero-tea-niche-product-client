import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/shop')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="container py-5">
            <h2>Our products here {products.length}</h2>
            <div class="row g-4">
                {
                    products.map(product=><Product
                        key={product._id}
                        product={product} 
                        ></Product>)
                }
            </div>
            <button className="btn btn-lg btn-outline-info">Shoe More</button>
        </div>
    );
};

export default Shop;