import React from "react";
import { useParams } from "react-router-dom";

const Display = () => {

    const {id, color1, color2} = useParams();


    return(
        <>
        {
            //============================================
            //HOME URL
            id === "home"? <h1>Welcome</h1>:
            //============================================


            isNaN(id)
                //============================================
                //CUSTOM WORD URL (works with or without colors)
                //============================================
                ?<h1 style = {{color: color1, backgroundColor: color2}}>The word is: {id}</h1>
                //============================================
                //NUMBER URL
                //============================================
                :<h1>The number is: {id}</h1>
        }
        </>
    );
}


export default Display;