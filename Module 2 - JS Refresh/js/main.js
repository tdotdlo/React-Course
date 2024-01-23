// This will import the VARIABLE from another file. IT HAS TO BE THE SAME NAME
import { firstLine } from './example.js';

console.log(firstLine);
// This will import the VALUE from the file - import name can be anything
import value from './example.js';

console.log(value);

// This will group ALL exports (NOT EXPORT DEFAULTS NOT INCLUDED) and import it as an object from the other JS file
import * as objName from './example.js';

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
