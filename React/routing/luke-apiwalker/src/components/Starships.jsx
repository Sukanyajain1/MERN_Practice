import React from 'react'

const Starships = (props) => {
    const {details} = props;
    return (
        <div>
            <h1>Name: {details.name}</h1>
            <h4>Model: {details.model}</h4>
            <h4>Starship class: {details.starship_class}</h4>
            <h4>Number of Passengers: {details.passengers}</h4>
            <h4>Manufacturer: {details.manufacturer}</h4>
        </div>
    )    
}

export default Starships;