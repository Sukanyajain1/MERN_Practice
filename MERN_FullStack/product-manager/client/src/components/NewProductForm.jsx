import axios from 'axios';
import React, { useState } from 'react'

const NewProductForm = (props) => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    // state variable to store validation errors inside of 
    let [errors, setErrors] = useState({});

    // submitHandler
    const addProduct = (e) => {
        e.preventDefault();
        
        // package up the state variables into an object
        let formInfo = {title, price, description}

        axios.post("http://localhost:8000/api/products/new", formInfo)
            .then (res => {
                console.log("response: ", res);

                if(res.data.error){
                    // this means there are validation errors we need to save
                    setErrors(res.data.error.errors);
                } else{
                    // clear the state
                    setTitle("");
                    setPrice("");
                    setDescription("");

                    props.setNewProductToggle(!props.newProductToggle);
                }

            })
            .catch(err => {
                console.log("error: ", err)
            })}



    return (
        <div>
            <form onSubmit = {addProduct}>
                <div className = "form-group">
                    <label htmlFor="">Title: </label>
                    <input onChange = {(e) => setTitle(e.target.value)} type="text" value = {title} className="form-control" />
                    <p className="text-danger">{errors.title?.message}</p>
                </div>
                <div className = "form-group">
                    <label htmlFor="">Price: </label>
                    <input onChange = {(e) => setPrice(e.target.value)} type="number" value = {price} className="form-control" />
                    <p className="text-danger">{errors.price?.message}</p>
                </div>
                <div className = "form-group">
                    <label htmlFor="">Description: </label>
                    <input onChange = {(e) => setDescription(e.target.value)} type="text" value = {description} className="form-control" />
                    <p className="text-danger">{errors.description?.message}</p>
                </div>
                <br/>
                <input type="submit" value="Add Product" className = "btn btn-secondary"/>
            </form>
        </div>
    )
}

export default NewProductForm