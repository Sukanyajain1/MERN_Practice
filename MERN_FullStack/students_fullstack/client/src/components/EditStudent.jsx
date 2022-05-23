import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const EditStudent = () => {

    const {_id} = useParams();

    const [studentInfo, setStudentInfo] = useState([]);

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/students/show_one/${_id}`)
            .then(res =>{
                console.log("response: ", res.data);
                setStudentInfo(res.data.results);
            })
            .catch(err => console.log("error: ", err))
    }, [])

    const changeHandler = (e) => {
        if(e.target.type === "checkbox"){
            setStudentInfo({
                ...studentInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setStudentInfo({
                ...studentInfo,
                [e.target.name]: e.target.value
            })
        }
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/students/update/${_id}`, studentInfo)
            .then(res =>{
                console.log("response: ", res.data);
                history.push("/") //HISTORY PUSH
            })
            .catch(err => console.log("error: ", err))
    }

    


    return (
    <div>
        <h2>EditStudent</h2>
        <form onSubmit = {submitHandler}>
                <div className = "form-group">
                    <label htmlFor="">Name: </label>
                    <input name = "name" onChange = {changeHandler} type="text" value = {studentInfo.name} className="form-control" />
                </div>
                <div className = "form-group">
                    <label htmlFor="">Number of Projects: </label>
                    <input name = "numOfProjects" onChange = {changeHandler} type="number" value = {studentInfo.numOfProjects} className="form-control" />
                </div>
                <div className = "form-group">
                    <label htmlFor="">Graduation Date: </label>
                    <input name = "gradDate" onChange = {changeHandler} type="date" value = {studentInfo.gradDate} className="form-control" />
                </div>
                <div className = "form-group">
                    <label htmlFor="">Check box if Veteran: </label>
                    <input name = "isVeteran" onChange = {changeHandler} type="checkbox" checked = {studentInfo.isVeteran} className="form-check-input" />
                </div>
                <br/>
                <input type="submit" value="Add Student" className = "btn btn-secondary"/>
            </form>
    </div>
    )
}

export default EditStudent