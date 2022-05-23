import axios from 'axios';
import React, { useState } from 'react'

const NewStudentForm = (props) => {

    let [name, setName] = useState("");
    let [numOfProjects, setNumOfProjects] = useState("");
    let [gradDate, setGradDate] = useState("");
    let [isVeteran, setIsVeteran] = useState(false);

    // state variable to store validation errors inside of 
    let [errors, setErrors] = useState({});

    // submitHandler
    const addStudent = (e) => {
        e.preventDefault();
        
        // package up the state variables into an object
        let formInfo = {name, numOfProjects, gradDate, isVeteran}

        axios.post("http://localhost:8000/api/students/new", formInfo)
            .then (res => {
                console.log("response: ", res);

                if(res.data.error){
                    // this means there are validation errors we need to save
                    setErrors(res.data.error.errors);
                } else{
                    // clear the state
                    setName("");
                    setNumOfProjects("");
                    setGradDate("");
                    setIsVeteran(false);

                    props.setNewStudentToggle(!props.newStudentToggle);
                }

            })
            .catch(err => {
                console.log("error: ", err)
            })}



    return (
        <div>
            <form onSubmit = {addStudent}>
                <div className = "form-group">
                    <label htmlFor="">Name: </label>
                    <input onChange = {(e) => setName(e.target.value)} type="text" value = {name} className="form-control" />
                    <p className="text-danger">{errors.name?.message}</p>
                </div>
                <div className = "form-group">
                    <label htmlFor="">Number of Projects: </label>
                    <input onChange = {(e) => setNumOfProjects(e.target.value)} type="number" value = {numOfProjects} className="form-control" />
                    <p className="text-danger">{errors.numOfProjects?.message}</p>
                </div>
                <div className = "form-group">
                    <label htmlFor="">Graduation Date: </label>
                    <input onChange = {(e) => setGradDate(e.target.value)} type="date" value = {gradDate} className="form-control" />
                    <p className="text-danger">{errors.gradDate?.message}</p>
                </div>
                <div className = "form-group">
                    <label htmlFor="">Check box if Veteran: </label>
                    <input onChange = {(e) => setIsVeteran(e.target.checked)} type="checkbox" value = {isVeteran} className="form-check-input" />
                    <p className="text-danger">{errors.isVeteran?.message}</p>
                </div>
                <br/>
                <input type="submit" value="Add Student" className = "btn btn-secondary"/>
            </form>
        </div>
    )
}

export default NewStudentForm