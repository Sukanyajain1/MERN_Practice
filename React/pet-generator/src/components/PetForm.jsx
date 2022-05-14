import React, {useState} from 'react';

const PetForm = () => {

    // create a state variable for each input form the form that we want to collect input from.
    let [name, setName] = useState("");
    let [numWins, setNumWins] = useState("");
    let [profPic, setProfPic] = useState("");
    let [power, setPower] = useState("");
    

    // create state variable which is an array so that we can store all the pets that are submitted.
    // how to create a state variable that is equal to an array= put empty square brackets inside of the useState parentheses

    let [petList, setPetList] = useState([]);
    
    
    // create a submit handler below:
    const submitPet = (e) => {
        // the default behavior of a form when it is submitted, is to reload the page. we can prevent this from happening using preventDefault();
        e.preventDefault();
        // console.log("submitted!");
        
        // every time a pet gets created, we want to package it into an object.
        // create a pet object (python dictionary) -> also called a hashmap
        let pet = {name, numWins, profPic, power}
        
        // use the setPetList setter to update the petList array to have the pet object inside of it
        setPetList([...petList, pet])
        // console.log("pet looks like this--->", pet)
        // console.log("Pet List: ", petList)
        
    }


    // const clearState () => {
    //     return - clear the state (all the variables created in state)
    // }

    return (
        <>
            <h1>Hi there!</h1>
            {/* We want the state variables to update their value (using setters) whenever the inputs are changed (onChange). */}
            <form onSubmit={submitPet}>
                <div className="form-group">
                    <label htmlFor=""> Name of Pet: </label>
                    <input onChange={(e) => {setName(e.target.value)}} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor=""> Number of Villains Defeated: </label>
                    <input onChange={(e) => {setNumWins(e.target.value)}} type="number" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor=""> Profile picture url: </label>
                    <input onChange={(e) => {setProfPic(e.target.value)}} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor=""> Super Power: </label>
                    <input onChange={(e) => {setPower(e.target.value)}} type="text" className="form-control" />
                </div>
                <input type="submit" value="Add Pet" className="btn btn-primary mt-3" />
            </form>
            <hr/>


            {
                petList.map((petObj, idx) =>{
                    return (
                        <>
                            <h1 key={idx}>{petObj.name}</h1>
                            <img src={petObj.profPic} alt="" width = "400px" height = "auto" />
                            <h3>Super power: {petObj.power}</h3>
                            <h4>Number of Villains Defeated: {petObj.numWins}</h4>
                            <hr/>
                        </>
                    );
                })
            }
        </>
    );
}

export default PetForm;
