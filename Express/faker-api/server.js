const express = require("express"); // import express so we can use express features
const { faker } = require('@faker-js/faker'); // import faker library so we can use it to generate fake random data
const app = express(); // create our app variable which is an insttance of express
const port = 8000;


// NEED THIS TO HANDLE POST REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES!!!
app.use(express.json());
app.use(express.urlencoded({extended:true}));






// ========================================================
// USER CLASS
// ========================================================
class User {
    constructor() {
        this._id = faker.random.numeric(2);
        this.firstName = faker.name.firstName() ;
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
        this.password = faker.internet.password();
    }
}

app.get("/api/users/new", (req,res) => {
    // create a user
    let newUser = new User();
    // respond with json with info about the user
    res.json(newUser);
})



// ========================================================
// COMPANY CLASS
// ========================================================
class Company {
    constructor() {
        this._id = faker.random.numeric(5);
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/companies/new", (req,res) => {
    let newCompany = new Company();
    res.json(newCompany);
})




// THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, () => console.log(`Listening on port ${port}`));