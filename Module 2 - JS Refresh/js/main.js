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
// '-1' means not found
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

const transformToObjects = (numberArray) => {
	return numberArray.map((eachNumber) => ({ val: eachNumber }));
};

console.log(transformToObjects([1, 2, 3]));
