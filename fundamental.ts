// DECLARING VARIABLE 
var number = 1;
let count = 1; // JS ES6 introduce let keyword same as var
const player = 1; // const means player value cannot be change 

// when we use let in typescript when we compile fundamental.js will change the let keyword to var. As they using ES5
function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log('Finally' + i);
}
doSomething();

// // DATA TYPE 
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3,4,];
// let f: any[] = [1,2,true,'Hello'];

// instead of declaring the color vairable and value one by one 
const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;
// we could use enum and write it this way instead
enum Color {Red = 0,Green = 1,Blue = 2};
let backgroundColor = Color.Red
console.log(backgroundColor);

// TYPE ASSERTION/"TYPE CASTING"
// if we don't define data type for message it will be default 
// let message: any 
let message;
message = 'abc';
// to use the function that comes with string we need to let compiler know that message is a string instead of of an object type any 
// 1ST METHOD 
let endsWithC = (<string>message).endsWith('c')
// 2ND METHOD
let alternativeWay = (message as string).endsWith('c');
console.log(endsWithC);

// ARROW FUNCTION/LAMBDA EXPRESSION
let log = function(message) {
    console.log(message);
}
// another way of writing function
let dolog = (message) => {console.log(message)}

// INTERFACE


