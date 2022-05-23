import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const OneAuthor = () => {

    const {_id} = useParams();
    const [authorInfo, setAuthorInfo] = useState([]);
    const history = useHistory();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/show_one/${_id}`)
            .then(res =>{
                console.log("response: ", res.data);
                setAuthorInfo(res.data.results);
            })
            .catch(err => {
                console.log("error: ", err)
            })
    }, [])

    const deleteAuthor = (e) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
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
            <h3>Name: {authorInfo.name}</h3>
            <button onClick={deleteAuthor} className="btn btn-danger">Delete {authorInfo.name}</button>
        </div>
    )
}

export default OneAuthor;