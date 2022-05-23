import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const OneProduct = () => {

    const {_id} = useParams();
    const [productInfo, setProductInfo] = useState([]);
    const history = useHistory();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/show_one/${_id}`)
            .then(res =>{
                console.log("response: ", res.data);
                setProductInfo(res.data.results);
            })
            .catch(err => {
                console.log("error: ", err)
            })
    }, [])

    const deleteProduct = (e) => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
        .then(res =>{
            console.log("response: ", res.data);
            history.push("/") //HISTORY PUSH
        })
        .catch(err => {
            console.log("error: ", err)
        })

    }

    return (
        <div>
            <h3>Title: {productInfo.title}</h3>
            <h3>Price:  ${productInfo.price}</h3>
            <h3>Description: {productInfo.description}</h3>
            <button onClick={deleteProduct} className="btn btn-danger">Delete {productInfo.title}</button>
        </div>
    )
}

export default OneProduct;