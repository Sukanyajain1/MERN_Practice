import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllAuthors = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{
                console.log("response: ", res.data);
                setAllAuthors(res.data.results); //setting allAuthors to whatever the api call returns
            })
            .catch(err => {
                console.log("error: ", err)
            })
    }, [deleteToggle, props.newAuthorToggle])
    

    const deleteAuthor = (id) => {
        console.log("delete button was clicked")
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
        .then(res =>{
            console.log("response: ", res.data);
            setDeleteToggle(!deleteToggle);
        })
        .catch(err => console.log("error: ", err))
    }




    return (
        <>
            <h2>All of the Authors</h2>
            <div className="cards">
            {
                allAuthors.map((authorObj, idx) =>{
                    return (
                        <div key = {authorObj._id} className="card mx-auto mb-2" style={{width: "18rem"}}>
                            <div className="card-body">
                            <h5 className="card-title"><Link to={`/authors/${authorObj._id}`}>Name: {authorObj.name}</Link></h5>

                            <p><Link to={`/edit/${authorObj._id}`} className = "btn btn-primary">Edit {authorObj.name}</Link></p>

                            <button onClick={(e) => {deleteAuthor(authorObj._id)}} className="btn btn-danger">Delete {authorObj.name}</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default AllAuthors;