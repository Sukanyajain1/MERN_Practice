import React, { useState} from 'react';

const Pokemon = () => {
    
    // create a variable to store all the pokemon in that we get back
    let [pokemonList, setPokemonList] = useState ([])




    const getPokemon = () =>{
        console.log("getting all the pokemon!!")
        
        // =======================================================
        // fetch is a built-in function that returns a promise 
        // =======================================================
        console.log("1");

        // fetch gives back a promise. a promise is a set of code that is asynchronous (it does not go from line to line) where the response time is not exact so we can allow it to perform some task or run some code while it is waiting to get back a response. When it gets back the response, we can tell it what to do in the .then()
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => { // .then means whenever the api is done getting back the data
                console.log("2");
                return response.json() //conver the response to json that our application can read
            })
            .then(convertedResponse => {
                console.log("3");
                console.log("get the response ---> ", convertedResponse);
                setPokemonList(convertedResponse.results)
            })
            .catch(err =>{ // .catch is for if there is any issue in getting the data
                console.log("SOMETHING WENT WRONG: ", err);
            })
            console.log("4");
    }




    return (
        <div>
            <h1>This is the pokemon master list</h1>
            <button onClick = {getPokemon}>Click me to get the list of all pokemon names</button>
            {
                pokemonList.map((pokemon, idx) =>{
                    return(
                        <div key= {idx}>
                            <h3>{pokemon.name}</h3>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Pokemon;