import React from 'react'

const Films = (props) => {
    const {details} = props;
    return (
        <div>
            <h1>Title: {details.title}</h1>
            <h4>Release Date: {details.release_date}</h4>
            <h4>Director: {details.director}</h4>
            <h4>Producer: {details.producer}</h4>
        </div>
    )    
}

export default Films;