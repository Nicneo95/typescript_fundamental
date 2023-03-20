// DECLARING VARIABLE 
// var is a function scope  
// var is accessible in the window object
var number = 1;
// let & const is block scope
// let is not accessible in window object
let count = 1; // JS ES6 introduce let keyword same as var
const player = 1; // const means player value cannot be change 
// when we use let in typescript when we compile fundamental.js will change the let keyword to var. As they using ES5
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally' + i);
}
doSomething();
// // DATA TYPE 
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3,4,];
let f: any[] = [1,2,true,'Hello'];
// instead of declaring the color vairable and value one by one 
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
// we could use enum and write it this way instead
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
console.log(backgroundColor);
// TYPE ASSERTION/"TYPE CASTING"
// if we don't define data type for message it will be default 
// let message: any 
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
console.log(endsWithC);
