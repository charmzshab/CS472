'use strict';
//function declaration

// function sum(a) {
//     return a;

// }
// function sum(a, b, c) {
//     return a + b + c

// }
// function sum() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }


// }
// sum(1, 2, 3, 4, 5)

// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));


//function expression

// let sum = function add(a, b) {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
//     return a + b;
// };
// // sum(1, 2)

// //arrow function
// let sum1 = (a, b) => {
//     return a + b;
// }

// sum1(3, 8)
// let sum2 = (a, b) => a + b;

//iife

(function display(a) {
    console.log('Hello world', a);
})(5);

let a = function sum() { return 5 };
var b = function sum() { return 5 };


