const express = require("express"); // importing express


const app = express(); // create our app variable which is an instance of express
const port = 8000; // declaring a port for the backend api to run in (localhost:8000)


// NEED THIS TO HANDLE PORT REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES!!!
app.use(express.json()); //lets our app convert form info into json
app.use(express.urlencoded({extended:true})); //lets our app parse form information

require("./server/config/mongoose.config");


// ROUTES HERE - MAKE SURE ROUTES IMPORT IS BELOW ALL THE APP.USE COMMANDS ABOVE
require("./server/routes/quote.route")(app);






// THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, () => console.log(`Listening on port: ${port}`));