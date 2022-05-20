const express = require("express"); // import express so we can use express features
const app = express(); // create our app variable which is an insttance of express
const port = 8000;



// NEED THIS TO HANDLE POST REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES!!!
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// our fake data here
let quotes = [
    {content: "It is not the mountains ahead that will wear you out, it is the pebble in you shoe", author:"Muhammad Ali"},
    {content: "A wise man once said nothing at all", author:"Wes"},
    {content: "Comparison is the thief of joy", author:"Theodore Roosevelt"},
    {content: "Fall down 7 times stand up 8", author:"Japanese Proverb"},
    {content: "You attract what you vibrate", author:"Fritz"},
    {content: "Wherever you go, there you are", author:"Eckhart Tolle"},
    {content: "Success is the ability to go from one failure to the next, with no loss of enthusiasm", author:"Winston Churchill"},
    {content: "As long as you have 2 arms, 2 legs, and a beating heart, it'll be ok. Nothing is the end of the world.", author:"Taina Aller"}
]




// create our api endpoints here: eg --> http://localhost:8000/api/hello
// need to create a function right underneath the app route

// THE FORMAT OF THE APP ROUTE:
// app.get("/api/hello", (req, res) => {})

app.get("/api/hello", (req, res) => {
    res.json({msg: "Wow this is actually working."});
})

// create an endpoint to get all the quotes:
app.get("/api/quotes", (req, res) => {
    res.json({count: quotes.length, resutls: quotes});
})

// get one quote based on index number:
app.get("/api/quotes/:id", (req, res) => {
    res.json({resutls: quotes[req.params.id]});
})

// create a new quote:
app.post("/api/quotes", (req, res) => {
    console.log("req.body is this -->", req.body); // req.body is the form information that was submitted (the new quote object)
    quotes.push(req.body);
    res.json({count: quotes.length, resutls: quotes});
})

// update a quote based on an index number:
app.put("/api/quotes/:id", (req, res) => {
    quotes[req.params.id] = req.body; //update the quote array at specific index with the information from the form (form info is req.body)
    res.json({resutls: quotes[req.params.id]});
})

// delete a quote based on an index number:
app.delete("/api/quotes/:id", (req,res) => {
    const id = req.params.id;
    quotes.splice(id, 1); // splice removes a value at a specified index
})







// THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, () => console.log(`Listening on port ${port}`));