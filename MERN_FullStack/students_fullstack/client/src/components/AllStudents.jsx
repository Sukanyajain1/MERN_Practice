import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllStudents = (props) => {
    const [allStudents, setAllStudents] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/students')
            .then(res =>{
                console.log("response: ", res.data);
                setAllStudents(res.data.results); //setting allStudents to whatever the api call returns
            })
            .catch(err => {
                console.log("error: ", err)
            })
    }, [deleteToggle, props.newStudentToggle])
    

    const deleteStudent = (id) => {
        console.log("delete button was clicked")
        axios.delete(`http://localhost:8000/api/students/delete/${id}`)
        .then(res =>{
            console.log("response: ", res.data);
            setDeleteToggle(!deleteToggle);
        })
        .catch(err => console.log("error: ", err))
    }




    return (
        <>
            <h2>All of the Students</h2>
            <div className="cards">
            {
                allStudents.map((studentObj, idx) =>{
                    return (
                        <div key = {studentObj._id} className="card mx-auto mb-2" style={{width: "18rem"}}>
                            <div className="card-body">
                            <h5 className="card-title"><Link to={`/students/${studentObj._id}`}>{studentObj.name}</Link></h5>

                            <h6 className="card-subtitle mb-2 text-muted">Number of Projects: {studentObj.numOfProjects}</h6>

                            <p className="card-text">Graduation Date: {studentObj.gradDate}</p>

                            <p className="card-text fw-bold">Veteran Status: {studentObj.isVeteran? "Veteran": "Non-Veteran"}</p>

                            <p><Link to={`/edit/${studentObj._id}`} className = "btn btn-primary">Edit {studentObj.name}</Link></p>

                            <button onClick={(e) => {deleteStudent(studentObj._id)}} className="btn btn-danger">Delete {studentObj.name}</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default AllStudents;