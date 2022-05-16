import React from 'react'

const Species = (props) => {
    const {details} = props;
    return (
        <div>
            <h1>Name: {details.name}</h1>
            <h4>Language: {details.language}</h4>
            <h4>Skin Colors: {details.skin_colors}</h4>
            <h4>Eye Colors: {details.eye_colors}</h4>
            <h4>Classification: {details.classification}</h4>
        </div>
    )    
}

export default Species;