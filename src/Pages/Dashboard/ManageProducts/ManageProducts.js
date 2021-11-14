import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    const [products, setProducts] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/shop')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              alert('successfully deleted');
            }
          });
        console.log(id);
    }
    return (
        <div className="container py-5">
            <h2>Our products here {products.length}</h2>
            <div className="row g-4">
            {
                products.map(product=>  <div class="col-lg-4">
                <div class="card">
                  <img src={product.img}class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text"> {product.price} </p>
                    <button onClick={() => handleDelete(product?._id)} className="btn btn-outline-info">Remove</button>
                  </div>
                </div>
              </div>)
            }
            </div>
            <button className="btn btn-lg btn-outline-info">Shoe More</button>
        </div>
    );
};

export default ManageProducts;