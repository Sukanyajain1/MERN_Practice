import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {

    const {_id} = useParams();

    const [productInfo, setProductInfo] = useState([]);

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/show_one/${_id}`)
            .then(res =>{
                console.log("response: ", res.data);
                setProductInfo(res.data.results);
            })
            .catch(err => console.log("error: ", err))
    }, [])

    const changeHandler = (e) => {
        if(e.target.type === "checkbox"){
            setProductInfo({
                ...productInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setProductInfo({
                ...productInfo,
                [e.target.name]: e.target.value
            })
        }
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${_id}`, productInfo)
            .then(res =>{
                console.log("response: ", res.data);
                history.push("/") //HISTORY PUSH
            })
            .catch(err => console.log("error: ", err))
    }

    


    return (
    <div>
        <h2>EditProduct</h2>
        <form onSubmit = {submitHandler}>
                <div className = "form-group">
                    <label htmlFor="">Title: </label>
                    <input name = "title" onChange = {changeHandler} type="text" value = {productInfo.title} className="form-control" />
                </div>
                <div className = "form-group">
                    <label htmlFor="">Price: </label>
                    <input name = "price" onChange = {changeHandler} type="number" value = {productInfo.price} className="form-control" />
                </div>
                <div className = "form-group">
                    <label htmlFor="">Desciption: </label>
                    <input name = "description" onChange = {changeHandler} type="text" value = {productInfo.description} className="form-control" />
                </div>
                <br/>
                <input type="submit" value="Add Product" className = "btn btn-secondary"/>
            </form>
    </div>
    )
}

export default EditProduct