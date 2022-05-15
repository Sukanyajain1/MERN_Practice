import React, { useState} from 'react';

const Coins = () => {
    
    // create a variable to store all the coins in that we get back
    let [coinList, setCoinList] = useState ([])




    const getCoins = () =>{
        console.log("getting all the coins!!")
        
        // =======================================================
        // fetch is a built-in function that returns a promise 
        // =======================================================
        console.log("1");

        // fetch gives back a promise. a promise is a set of code that is asynchronous (it does not go from line to line) where the response time is not exact so we can allow it to perform some task or run some code while it is waiting to get back a response. When it gets back the response, we can tell it what to do in the .then()
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response => { // .then means whenever the api is done getting back the data
                console.log("2");
                return response.json() //conver the response to json that our application can read
            })
            .then(convertedResponse => {
                console.log("3");
                console.log("get the response ---> ", convertedResponse);
                setCoinList(convertedResponse)
            })
            .catch(err =>{ // .catch is for if there is any issue in getting the data
                console.log("SOMETHING WENT WRONG: ", err);
            })
            console.log("4");
    }




    return (
        <div>
            <h1>this is the crypto api app</h1>
            <button onClick = {getCoins}>Click me to get the latest coin info</button>
            {
                coinList.map((coin, idx) =>{
                    return(
                        <div key= {idx}>
                            <h3>{coin.name}</h3>
                            <p>Price: ${coin.current_price}</p>
                            <img src={coin.image} alt="" width = "200px"/>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Coins;