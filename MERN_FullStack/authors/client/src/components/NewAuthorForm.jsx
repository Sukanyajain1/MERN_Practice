import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const NewAuthorForm = (props) => {

    let [name, setName] = useState("");

    const history = useHistory();
    
    // state variable to store validation errors inside of 
    let [errors, setErrors] = useState({});

    // submitHandler
    const addAuthor = (e) => {
        e.preventDefault();
        
        // package up the state variables into an object
        let formInfo = {name}

        axios.post("http://localhost:8000/api/authors/new", formInfo)
            .then (res => {
                console.log("response: ", res);
                
                if(res.data.error){
                    // this means there are validation errors we need to save
                    setErrors(res.data.error.errors);
                } else{
                    // clear the state
                    setName("");
                    
                    props.setNewAuthorToggle(!props.newAuthorToggle);
                    history.push("/") //HISTORY PUSH
                }

            })
            .catch(err => {
                console.log("error: ", err)
            })}



    return (
        <div>
            <form onSubmit = {addAuthor}>
                <div className = "form-group">
                    <label htmlFor="">Name: </label>
                    <input onChange = {(e) => setName(e.target.value)} type="text" value = {name} className="form-control" />
                    <p className="text-danger">{errors.name?.message}</p>
                </div>
                <br/>
                <input type="submit" value="Add Author" className = "btn btn-secondary"/>
            </form>
        </div>
    )
}

export default NewAuthorForm;