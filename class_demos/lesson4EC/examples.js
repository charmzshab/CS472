// import { display } from './e1.js';
'use strict';

// var a = 5;
// let b = 10;
// function c() {
//     console.log('Hello World!');
//     display()
// }
// console.log(a, b);
// console.log(window);
// c()
// {
//     foo();
//     function foo() {
//         console.log('foo');
//     }
// }
// foo()

// function f() {
//     var a = 1, b = 20, c;
//     console.log(a + " " + b + " " + c);
//     function g() {
//         var b = 300, c = 4000;
//         console.log(a + b + c);
//         a = a + b + c;
//         console.log(a + b + c);
//     }
//     console.log(a + b + c);
//     g();
//     console.log(a + b + c);
// }
// f();

// var x = 10;
// function main() {
//     console.log("x1 is:" + x);
//     x = 20;
//     console.log("x2 is:" + x);
//     if (x > 0) {
//         var x = 30;
//         console.log("x3 is:" + x);
//     }
//     console.log("x4 is:" + x);
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);
//     };
//     f(50);
//     console.log("x6 is:" + x);
// }
// main();
// console.log("x7 is:" + x);



// Q1 --------------------------------------------
'use strict';
// let msg = "Hello World!";
// if (msg) {
//     const str = "inside if block";
//     // function foo() {
//     //     console.log(msg, str);
//     //     display("Hi hi");
//     // }

//     foo();
// }
// var str = "global scope";
// function display() {
//     let str = "inside display function";
//     console.log(str);
// }

// Q2 --------------------------------------------
let arr = [1, 2, 3, 4, 5];
const user = { fname: "John", lname: "Doe" };
let display = function (arg) {
    if (Array.isArray(arg)) {
        console.log("Array is passed as argument", arg);
    }
    else {
        console.log("Object is passed as argument", arg);
    }
}
display(arr);
display(user);

