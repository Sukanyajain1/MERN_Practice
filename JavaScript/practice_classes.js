// Create a User class
// add an attribute: name
// add an attribute: health
// add an attribute: speed - give a default value of 3
// add an attribute: strength - give a default value of 3
// add a method: sayName() - This should log that User's name to the console
// add a method: showStats() - This should show the User's name, strength, speed and health
// add a method: drinkJuice() - This should add +10 Health to the User

class User{
    constructor(name){
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


// const user1 = new User("Sukanya");
// user1.sayName();
// console.log("================================")
// user1.showStats();
// user1.drinkJuice();
// console.log("================================")
// user1.showStats();



// should have default:
// 200 health
// 10 speed
// 10 strength

// should have new attribute called wisdom: default 10

// methods:
// speakWisdom() - calls the drinkJuice method from the User class
// then console.logs a wise message
class Teacher extends User {
    constructor (name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkJuice();
        console.log("This is a wise message from your teacher:");
        console.log("Shopping for groceries on an empty stomach doesn't always result in the greatest haul.");
        console.log("Have a snack and clear your head before you head out the door.");
    }
}



const teacher1 = new Teacher("Sukanya's Mom");
teacher1.sayName();
console.log("================================")
teacher1.showStats();
teacher1.drinkJuice();
console.log("================================")
teacher1.showStats();
teacher1.speakWisdom();