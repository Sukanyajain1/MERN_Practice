import React from 'react'

const People = (props) => {
    const {details} = props;
    return (
        <div>
            <h1>Name: {details.name}</h1>
            <h4>Height: {details.height}</h4>
            <h4>Mass: {details.mass}</h4>
            <h4>Hair Color: {details.hair_color}</h4>
            <h4>Skin Color: {details.skin_color}</h4>
        </div>
    )    
}

export default People;