// This will import the VARIABLE from another file. IT HAS TO BE THE SAME NAME
import { firstLine } from './example.js';

console.log(firstLine);
// This will import the VALUE from the file - import name can be anything
import value from './example.js';

console.log(value);

// This will group ALL exports (NOT EXPORT DEFAULTS NOT INCLUDED) and import it as an object from the other JS file
import * as objName from './example.js';

// ---------------------- FUNCTIONS ----------------------------

console.log(objName.firstLine);
console.log(objName.weather);

// Creates the function definition
function firstFn() {
	console.log(1 + 1);
}

//Invokes the function. Can call function as many times as you wish.
firstFn(); //2
firstFn(); //2

// Functions with params
function fnWithParams(firstNum, secondNum) {
	console.log(firstNum, secondNum);
}

// Output
fnWithParams(1, 2); //1 2
fnWithParams(3, 4); //3, 4

// Functions with default values
function fnWithDefaultVal(firstNum, secondNum, thirdNum = 3) {
	console.log(firstNum, secondNum, thirdNum);
}

//Arrow Fn - default Values
// const fnWithDefaultVal = (firstNum, secondNum, thirdNum = 3) => console.log(firstNum, secondNum, thirdNum);

// Output
fnWithDefaultVal(1, 2); //1, 2, 3 - uses DEFAULT value
fnWithDefaultVal(1, 2, 4); //1, 2, 4 - overwrites DEFAULT value

// Functions with Return Value
function fnWithReturnVal(firstNum, secondNum) {
	return firstNum + secondNum;
}

// Output
const sumOfnum = fnWithReturnVal(2, 4);
console.log(sumOfnum); //6

// Create a fn that accepts three values and returns the result of the operations
// function totalOfNum(one, two, three = 1) {
// 	return (one / two) * three;
// }

// Arrow Fn
const totalOfNum = (one, two, three = 3) => (one / two) * three;

// Output
let answer = totalOfNum(10, 5);
console.log(answer); // 6

answer = totalOfNum(10, 5, 2);
console.log(answer); //4

// ---------------------- OBJECTS & CLASS----------------------------
// used to group different values together
const user = {
	// key: value
	name: 'Darren',
	age: 38,
	color: 'Navy',
	// functions in objs are known as METHODS
	greet() {
		console.log(this.name + ' ' + this.color);
	},
};

console.log(user.name);
user.greet();

// Using a class to obstantiate an obj - contains a blueprint on how to create a new object
class House {
	constructor(material, address) {
		this.material = material;
		this.address = address;
	}
}

// creates instance of an object
const cambie = new House('Oak Wood', '462 Cambie Street');
console.log(cambie);

// ----------------------ARRAYS & ARRAY METHODS----------------------------
// Creates a list of values of the same TYPE of data

const typeOfCars = ['Acura', 'Honda', 'Toyota'];
console.log(typeOfCars);

// Removes last element of array
typeOfCars.pop();
console.log(typeOfCars);

//Adds to an the END of an array
typeOfCars.push('Toyota');
console.log(typeOfCars);

// Array of object - cars
const allCars = [
	{
		make: 'Ford',
		country: 'America',
	},
	{
		make: 'Dodge',
		country: 'America',
	},
	{
		make: 'Acura',
		country: 'Japan',
	},
	{
		make: 'Honda',
		country: 'Japan',
	},
	{
		make: 'Toyota',
		country: 'Japan',
	},
];

console.log(allCars);

// filters through the array and tests each element within the array
// If true, it will create a shallow copy of the new array and passes it to a new variable - 'japanOnly'
const japanOnly = allCars.filter((everyCar) => everyCar.country !== 'America');
console.log(japanOnly);

// Searches through each element of the array to match the testing condition
// If true, it will return the index number of the first element in the array
// '-1' means not found
const carsMadeInJapan = allCars.findIndex((everyCar) => everyCar.country === 'Japan');
console.log(carsMadeInJapan);

// Goes through each element of the array and manipulates the data within it.
// This will alter the original array.
allCars.map((eachCar, i) => (eachCar.made = 2000 + i));
console.log(allCars);

// ----------------------QUIZ #2---------------------------
// Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.
// In the newly returned array, every object must have a val key and the input array's number as a value.
// For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

const transformToObjects = (numberArray) => {
	return numberArray.map((eachNumber) => ({ val: eachNumber }));
};

console.log(transformToObjects([1, 2, 3]));

// ----------------------DESTRUCTURING---------------------------

// Pulls the data in the order which it is in the array.
// stores it to a variable
const [ford, dodge, acura, honda, toyota] = allCars;
console.log(ford, dodge, acura, honda, toyota);

// Destructuring objects requires that the variable you are destructuring to have the same name as
// the object property name.
// Order does not matter
const testObj = {
	name: 'a',
	area: 'vancouver',
};

//Using a colon and a variable, this is known as an ALIAS when destructuring objects
const { area: city, name } = testObj;
console.log(city, name);

// ----------------------SPREAD OPERATOR---------------------------
// This will create nested arrays rather than pulling the data from each array
const fruits = ['Apple', 'Blueberries', 'Oranges'];

// nestedArr[0] = fruits array
// nestedArr[1] = allCars array of objs
const nestedArr = [fruits, allCars];
console.log(nestedArr);

// By using the spread operator, this pull the data from each array and the data
// Into a new array.
const kids = [
	{
		name: 'Tommy',
		age: 3,
	},
	{
		name: 'Aiden',
		age: 4,
	},
	{
		name: 'Juliette',
		age: 2,
	},
];

const toys = ['Cars', 'Batman', 'Barbie'];

// mergedArrays[0] = {name: 'Tommy', age: 3}
// mergedARrays[1] = {name: 'Aiden', age: 4}
// etc etc
const mergedArrays = [...kids, ...toys];
console.log(mergedArrays);

// Spread operator for objs
const food = {
	type: 'sushi',
	country: 'Korea',
};

// By spreading within an object, it will copy the key value pairs over from the obj food to customer obj
const customer = {
	name: 'Gloria',
	position: 'General Manager',
	...food,
};

console.log(customer);

// ----------------------CONTROL STATEMENTS---------------------------

// IF STATEMENT - code will check if conditions are met. If not it will go to the next iteration
// const tempPass = prompt('Enter a temp password');

// if (tempPass.length < 6) {
// 	console.log('Password is too short');
// } else {
// 	console.log('Password has been accepted');
// }

// FOR LOOP - will iterate through an iterable variable until the end.
const hasbroToys = ['Cars', 'Batman', 'Barbie'];

for (let toys of hasbroToys) {
	console.log(toys);
}
