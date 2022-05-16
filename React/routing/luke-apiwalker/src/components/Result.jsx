import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import People from './People';
import Planets from './Planets';
import Species from './Species';
import Films from './Films';
import Starships from './Starships';
import Vehicles from './Vehicles';


const Result = () => {

    let {id , category} = useParams();

    let [details, setDetails] = useState({});

    let [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(convertedResponse => {
            console.log("get the response --->", convertedResponse);
            setDetails(convertedResponse.data)
            setError(false);
        })
        .catch(err => {
            console.log("SOMETHING WENT WRONG: ", err);
            setError(true);
        })
    }, [id, category])
    



    return (
        <div>
            {
            error === true?<img src="https://www.meme-arsenal.com/memes/52577612a290566287f2273992fa918e.jpg" alt="" />:
            category === "people"?
            <People details= {details}></People>:
            category === "films"?
            <Films details= {details}></Films>:
            category === "planets"?
            <Planets details= {details}></Planets>:
            category === "species"?
            <Species details= {details}></Species>: 
            category === "starships"?
            <Starships details= {details}></Starships>:
            category === "vehicles"?
            <Vehicles details= {details}></Vehicles>:null    
            }
        </div>
    )
}

export default Result