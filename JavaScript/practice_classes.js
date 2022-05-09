// Create a User class
// add an attribute: name
// add an attribute: health
// add an attribute: speed - give a default value of 3
// add an attribute: strength - give a default value of 3
// add a method: sayName() - This should log that User's name to the console
// add a method: showStats() - This should show the User's name, strength, speed and health
// add a method: drinkJuice() - This should add +10 Health to the User

class User{
    constructor(name, health){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("Name: " + this.name);
    }

    showStats(){
        console.log("Name: " + this.name);
        console.log("Strength: " + this.strength);
        console.log("Speed: " + this.speed);
        console.log("Health: " + this.health);
    }

    drinkJuice(){
        this.health +=10;
    }
}


const user1 = new User("Sukanya");
user1.sayName();
console.log("================================")
user1.showStats();
user1.drinkJuice();
console.log("================================")
user1.showStats();