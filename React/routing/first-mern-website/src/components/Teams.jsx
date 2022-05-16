import React from "react";
import { useParams } from "react-router-dom";

const Teams = () =>{

    const {id, color} = useParams();
    console.log("id and color are --->", id, color);
    // if the id is a nubmer, show team #, if the id is not a number, show "the team name is: "

    return(
        <>
            <h3>Showing the Teams</h3>
            <ol>
                <li>Lakers</li>
                <li>Wizards</li>
                <li> Mavs</li>
                <li>Suns</li>
                <li>Knicks</li>
            </ol>
            <hr/>
            <div style = {{backgroundColor: color}}>
                {
                    id === undefined?
                    <p>What is your favorite team?</p>:

                    isNaN(id)?
                        id === "celtics"? <div style = {{backgroundColor: "green"}}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png" width="200px" alt="The celtics" /></div>:
                        <h4>Displaying information team name is: {id}</h4>:
                        <h4>Displaying information team # is: {id}</h4>
                }
            </div>
        </>
    )
}

export default Teams;