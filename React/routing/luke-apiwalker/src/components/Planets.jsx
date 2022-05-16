import React from 'react'

const Planets = (props) => {
    const {details} = props;
    return (
        <div>
            <h1>Name: {details.name}</h1>
            <h4>Climate: {details.climate}</h4>
            <h4>Terrain: {details.terrain}</h4>
            <h4>Surface Water: {details.surface_water}</h4>
            <h4>Population: {details.population}</h4>
        </div>
    )    
}

export default Planets;