import React, {useState, useEffect} from 'react';
import axios from 'axios';


const AllStudents = () => {
    const [allStudents, setAllStudents] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/students")
            .then(res =>{
                console.log("response: ", res);
                setAllStudents(res.data.results);
            })
            .catch(err => {
                console.log("error: ", err)
            })
    }, [])
    
    return (
        <>
            <h2>All of the Students</h2>
            <div className="cards">
                
            {
                allStudents.map((studentObj, idx) =>{
                    return (
                        <div className="card mx-auto" style={{width: "18rem"}}>
                            <div className="card-body">
                            <h5 className="card-title">{studentObj.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="card-link">Card link</a>
                            <a href="/" className="card-link">Another link</a>
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