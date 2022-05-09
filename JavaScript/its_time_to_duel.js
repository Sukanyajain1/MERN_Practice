class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience  = resilience;
    }

    attack (target){
        // reduce target res by this.power
        target.resilience -= this.power;
        console.log(this.name + " attacked " + target.name + "!");
    }

    displayStats(){
        console.log("Name: " + this.name)
        console.log("Cost: " + this.cost)
        console.log("Power: " + this.power)
        console.log("Resilience: " + this.resilience)
    }
}


class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    action (target) {
        const checker = target instanceof Unit
            ? true
            : false;
        if (checker) {
            // const cardType = this.stat.value;
            // target.cardType += this.magnitude;
            // console.log(target.cardType);
            if (this.stat == "resilience"){
                target.resilience += this.magnitude;
                console.log(this.name + " card played on " + target.name + "!");
                console.log(this.text);
            }
            else if (this.stat == "power"){
                target.power += this.magnitude;
                console.log(this.name + " card played on " + target.name + "!");
                console.log(this.text);
            }
        }
        else {
            console.log("You're trying to use an attack card on an attack card! You can only use this card on other players!")
        }
    }
}

// UNIT CARDS
const redBeltWarrior = new Unit("Red Belt Warrior", 3, 3, 4);
const blackBeltWarrior = new Unit("Black Belt Warrior", 4, 5, 4);

// EFFECT CARDS
const hardAlgo = new Effect ("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new Effect ("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", 2);







// SHOW EVERYBODY'S STATS (before playing the game):
redBeltWarrior.displayStats();
console.log("=======================")
blackBeltWarrior.displayStats();

console.log("=========================================================================================================")

// PLAYING OUT A SCENARIO:

// play hard algo on red belt
hardAlgo.action(redBeltWarrior);
// play rejection on black belt
unhandledPromiseRejection.action(blackBeltWarrior);
// play pair programming on red belt
pairProgramming.action(redBeltWarrior);
// red belt uses attack method on black belt
redBeltWarrior.attack(blackBeltWarrior);

console.log("=========================================================================================================")

// SHOW EVERYBODY'S STATS (after playing the game):
redBeltWarrior.displayStats();
console.log("=======================")
blackBeltWarrior.displayStats();