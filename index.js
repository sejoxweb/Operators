// Import stylesheets
import './style.css';

//Operators
//arithmetic operators ( - +, -, /, %, *)
//assignment operator // =
//comparision operators //==

const a = 10;
const b = 10;

console.log(a == b);

console.log(typeof a); // number
console.log(typeof b); // number

console.log('------');

const c = '10';
const d = 10;

console.log('==', c == d); // value (not check type)
console.log(typeof c); //string
console.log(typeof d); //number

console.log('===', c === d); // value and type

//javascript engine while executing c "string 10" it will convert data type to "number 10"

//coercion
