import React, { useState} from 'react';
import axios from 'axios';


const Pokemon = () => {
    
    // create a variable to store all the pokemon in that we get back
    let [pokemonList, setPokemonList] = useState ([])




    const getPokemon = () =>{
        console.log("getting all the pokemon!!")
        
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(convertedResponse => {
                console.log("get the response ---> ", convertedResponse);
                setPokemonList(convertedResponse.data.results)
            })
            .catch(err =>{
                console.log("SOMETHING WENT WRONG: ", err);
            })
    }




    return (
        <div>
            <h1>This is the pokemon master list</h1>
            <button onClick = {getPokemon}>Click me to get the list of all pokemon names</button>
            {
                pokemonList.map((pokemon, idx) =>{
                    return(
                        <div key= {idx}>
                            <ul>
                                <li>{pokemon.name}</li>
                            </ul>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Pokemon;