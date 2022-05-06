// problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output:
/*
CONSOLE:
Tesla
Mercedes
*/
console.log(randomCar)
console.log(otherRandomCar)
// ==========================================================================


// problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output:
/*
VS Code automatically put a line through the name argument on line 26 and annotated it as 'deprecated'.
However, my prediction is:
CONSOLE:
undefined
Elon
*/
console.log(name);
console.log(otherName);
// ==========================================================================


// problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output:
/*
CONSOLE:
12345
undefined
*/
console.log(password);
console.log(hashedPassword);
// ==========================================================================


// problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output:
/*
CONSOLE:
false
true
*/
console.log(first == second);
console.log(first == third);
// ==========================================================================


// problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output:
/*
CONSOLE:
value
[1, 5, 1, 8, 3, 3]
1
5
*/
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// ==========================================================================