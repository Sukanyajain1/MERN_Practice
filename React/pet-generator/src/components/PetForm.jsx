import React, {useState} from 'react';

const PetForm = () => {

    // create a state variable for each input form the form that we want to collect input from.
    let [name, setName] = useState("");
    let [numWins, setNumWins] = useState("");
    let [profPic, setProfPic] = useState("");
    let [power, setPower] = useState("");
    let [favColor, setFavColor] = useState("");
    let [retired, setRetired] = useState(false);
    

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
        let pet = {name, numWins, profPic, power, favColor, retired}
        
        // use the setPetList setter to update the petList array to have the pet object inside of it
        setPetList([...petList, pet])
        
        
        // clear out the stat variables so that we can use this to empty the form inputs
        // set the variables to nothing after appending them to the list
        // then add the variables to the input tags using an html value attribute.
        setName("");
        setNumWins("");
        setProfPic("");
        setPower("");
        setFavColor("");
        setRetired(false);
        
    }

    //  function to toggle if the pet is retired between false and true.
    const toggleRetired=(e, idx) =>{
        //  we will modify the petList array at specific index -> idx so that the pet at that index has their "retired" property changed to true/false.
        
        
        // BEST PRACTICE THAT YOU DON'T CHANGE THE INPUT DIRECTLY AND MAKE A COPY INSTEAD
        // 1. make a copy of petList
        let [...copyList] = petList;
        // 2. change the pet at the specific index number property for retirement to true/false
        // retired?setRetired(false):setRetired(true);
        // copyList[idx].retired = !copyList[idx].retired;
        copyList[idx].retired = e.target.checked;
        // 3. update our state variable for petList with the modified copy
        setPetList(copyList);
        console.log("toggling retired button at index number: ", idx);
        console.log("toggle is:", retired);
    }

    return (
        <>
            <h1>Hi there!</h1>
            {/* We want the state variables to update their value (using setters) whenever the inputs are changed (onChange). */}
            <form onSubmit={submitPet}>
                <div className="form-group">
                    <label htmlFor=""> Name of Pet: </label>
                    <input onChange={(e) => {setName(e.target.value)}} type="text" className="form-control" value = {name}/>
                </div>
                <div className="form-group">
                    <label htmlFor=""> Number of Villains Defeated: </label>
                    <input onChange={(e) => {setNumWins(e.target.value)}} type="number" className="form-control" value = {numWins}/>
                </div>
                <div className="form-group">
                    <label htmlFor=""> Profile picture url: </label>
                    <input onChange={(e) => {setProfPic(e.target.value)}} type="text" className="form-control" value = {profPic}/>
                </div>
                <div className="form-group">
                    <label htmlFor=""> Super Power: </label>
                    <input onChange={(e) => {setPower(e.target.value)}} type="text" className="form-control" value = {power}/>
                </div>
                <div className="form-group">
                    <label htmlFor=""> Favorite Color: </label>
                    <input onChange={(e) => {setFavColor(e.target.value)}} type="text" className="form-control" value = {favColor}/>
                </div>
                <input type="submit" value="Add Pet" className="btn btn-primary mt-3" />
            </form>
            <hr/>


            <div className = "pet-list">
                {
                    petList.map((petObj, idx) =>{
                        return (
                                <div key={idx} className='pet-card' style = {{backgroundColor: petObj.favColor}}>
                                    <h2 style={{textDecoration: petObj.retired?"underline":"none"}}>{petObj.name}</h2>
                                    <p>Retired: <input type="checkbox" onChange = {(e)=>toggleRetired(e, idx)} name="" id="" /></p>
                                    <p>Number of Villains Defeated: {petObj.numWins}</p>
                                    <img src={petObj.profPic} alt="" width = "250px" height = "250px" />
                                    <h4>Super power: </h4>
                                    <h5>{petObj.power}</h5>
                                </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default PetForm;
