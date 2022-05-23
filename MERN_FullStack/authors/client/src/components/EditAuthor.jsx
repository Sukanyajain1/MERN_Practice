import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const EditAuthor = () => {

    const {_id} = useParams();

    const [authorInfo, setAuthorInfo] = useState([]);

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/show_one/${_id}`)
            .then(res =>{
                console.log("response: ", res.data);
                setAuthorInfo(res.data.results);
            })
            .catch(err => console.log("error: ", err))
    }, [])

    const changeHandler = (e) => {
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${_id}`, authorInfo)
            .then(res =>{
                console.log("response: ", res.data);
                history.push("/") //HISTORY PUSH
            })
            .catch(err => console.log("error: ", err))
    }

    


    return (
    <div>
        <h2>EditAuthor</h2>
        <form onSubmit = {submitHandler}>
                <div className = "form-group">
                    <label htmlFor="">Name: </label>
                    <input name = "name" onChange = {changeHandler} type="text" value = {authorInfo.name} className="form-control" />
                </div>
                <br/>
                <input type="submit" value="Edit Author" className = "btn btn-secondary"/>
            </form>
    </div>
    )
}

export default EditAuthor