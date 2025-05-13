"use strict";
// console.log(str);
// var str = "hello";
// console.log(str);


// console.log(str);
// let str = "hello";
// console.log(str);


// console.log(str);
// if (true) {
//     var str = "hello";
// }
// console.log(str);


// console.log(str);
// if (false) {
//     var str = "hello";
// }
// console.log(str);

// let str = "hello"
// if (true) {
//     let str = "innerHello";
//     console.log(str);
// }
// console.log(str);



// var a = 5;
// let b = 10;
// console.log(a, b)

// if (true) {//block1
//     var c = 15;
//     let d = 28;
//     let a = 18;
//     console.log(a, b, c, d)
//     {//block2
//         let h = 5;
//     }
// }

//Function declaration --------------------
// var c = 8;
// function foo(a, b) {
//     let s = 5;
//     var m = 7;
//     console.log(a, b, s, m, c);
// }

// foo(1, 3);


// function foo(arg) {
//     if (arg) {
//         let str = "hello";
//     }
//     console.log(str);
// }
// let a = 5;
// var str = "Hi hi"
// console.log(str);
// foo(0);


// "b"

// var a = true;
// if (a) {
//     function foo() { console.log("a"); }
// }
// else {
//     function foo() { console.log("b"); }
// }
// foo();
// foo("Hi", 23);
// function foo(arg) {
//     if (arg) {
//         var str = "hello";
//     }

//     console.log(str);
// }


// var foo = function () {
//     console.log("Hello");
// }

// foo();




//scope chain --- lexical scoping ----------------------------------
// function a() {
//     console.log(x);
// }
// function b() {
//     const x = 10;
//     a();
// }
// const x = 20;
// b();


// function b() {
//     function a() {
//         console.log(x);
//     }
//     console.log(x);
//     var x = 50;
//     a();
// }
// const x = 20;
// b();

// function b() {
//     function a() {
//         if (true) {//if (x == 10) {
//             var x = 15;
//             let d = 8;
//         }
//         {//1 LE
//             x = 10;
//             console.log(x);
//         }
//         console.log(x);
//     }
//     x = 10;
//     a();
// }
// var x = 20;
// b();

// var a = 5;
// let b = 10;
// if (true) {
//     var c = 15;
//     let d = 28;
//     {//a block scope
//         let aa = 55;
//     }

//     {//b block scope
//         let bb = 100;
//     }

// }

// function expression  -------------------------------
let fruits = ["apple", "banana", "orange"];
display();

function display() {
    console.log("Hello from display");
}
console.dir(display);
var print = function () {
    console.log("Hello from print");
};

print();


// Closure and free variable ---------------------------



// var a = 1;
// let b = 2;
// function outer() {
//     let c = 3;
//     var d = 4;
//     let func = function inner() {
//         let b = 5;
//         let c = 6;
//         console.log(a, b, c, d);
//     }
//     return func;
// }
// outer()();//func()


//free variable are not global and not local variable

// let a = 2;
// function foo() {
//     let b = 3;
//     var bar = function (d) {
//         let c = 5;
//         console.log(a, b, c, d);
//     }
//     return bar;
// }
// let baz = foo();
// baz(7);
// console.log(a);


// let x = 1;
// function foo(y) {
//     let inner = function (z) {
//         y = 3;
//         return x + y + z;
//     }
//     return inner;
// }
// let f = foo(2);
// console.log(f(5));


// console.dir(f);


// const f = 'John';
// function print() {
//     const l = 'Doe';
//     function display(p) {
//         console.log(`${p} from ${f} ${l}`);
//     }
//     return display;
// }
// const func = print();
// func("Hello");



// function cal(type, a, b) {
//     if (type === 'add') {
//         return a + b;
//     } else if (type === 'subtract') {
//         return a - b;
//     }
//     else if (type === 'multiply') {
//         return a * b;
//     }
//     else { return a / b; }
// }
// let four = 4;
// let seven = 7;
// console.log(cal('add', four, seven));




// a = 1;
// console.log(a);

// let a = 5;
// {
//     let a = 10;
//     {
//         let b = 20;
//         console.log(a, b)
//     }
// }