import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res =>{
                console.log("response: ", res.data);
                setAllProducts(res.data.results); //setting allProducts to whatever the api call returns
            })
            .catch(err => {
                console.log("error: ", err)
            })
    }, [deleteToggle, props.newProductToggle])
    

    const deleteProduct = (id) => {
        console.log("delete button was clicked")
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then(res =>{
            console.log("response: ", res.data);
            setDeleteToggle(!deleteToggle);
        })
        .catch(err => console.log("error: ", err))
    }




    return (
        <>
            <h2>All of the Products</h2>
            <div className="cards">
            {
                allProducts.map((productObj, idx) =>{
                    return (
                        <div key = {productObj._id} className="card mx-auto mb-2" style={{width: "18rem"}}>
                            <div className="card-body">
                            <h5 className="card-title"><Link to={`/products/${productObj._id}`}>Title: {productObj.title}</Link></h5>

                            <h6 className="card-subtitle mb-2 text-muted">Price: ${productObj.price}</h6>

                            <p className="card-text">Description: {productObj.description}</p>

                            <p><Link to={`/edit/${productObj._id}`} className = "btn btn-primary">Edit {productObj.name}</Link></p>

                            <button onClick={(e) => {deleteProduct(productObj._id)}} className="btn btn-danger">Delete {productObj.name}</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default AllProducts;