import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const OneStudent = () => {

    const {_id} = useParams();
    const [studentInfo, setStudentInfo] = useState([]);
    const history = useHistory();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/students/show_one/${_id}`)
            .then(res =>{
                console.log("response: ", res.data);
                setStudentInfo(res.data.results);
            })
            .catch(err => {
                console.log("error: ", err)
            })
    }, [])

    const deleteStudent = (e) => {
        axios.delete(`http://localhost:8000/api/students/delete/${_id}`)
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
            <h3>Name: {studentInfo.name}</h3>
            <h3>Number of Projects:  {studentInfo.numOfProjects}</h3>
            <h3>Graduation Date: {studentInfo.gradDate}</h3>
            <h3>Veteran Status: {studentInfo.isVeteran? "Veteran": "Non-Veteran"}</h3>
            <button onClick={deleteStudent} className="btn btn-danger">Delete {studentInfo.name}</button>
        </div>
    )
}

export default OneStudent;