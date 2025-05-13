
//Sync callback example -------------------------------------------------
// function incBy2(e) { //callback
//     console.log(e * 2)
//     return e * 2;
// }
// console.log("start");
// let newArr = [1, 2, 3].map(incBy2);      //sync
// console.log(newArr);
// console.log("end")



//Async callback example -------------------------------------------------
// console.log("start");//sync
// setTimeout(function display() { console.log("Hello"); }, 3000);
// console.log("end");//sync

// console.log("start");
// setTimeout(function cb1() { console.log("Hello 1"); }, 0);
// setTimeout(function cb2() { console.log("Hello 2"); }, 0);
// console.log("end");

// console.log("start");
// setTimeout(function cb() { console.log("Hello"); });
// console.log("end");


// console.log("start");
// setTimeout(function sum(a, b) { console.log(a + b); }, 3000, 5, 10);
// console.log("end");

// let timerId = setTimeout(() => console.log("Hello"), 3000);

// setTimeout(() => {
//     clearTimeout(timerId);
//     console.log('setTimeout is cleared');
// }, 2000)





//Async callback example with setInterval -------------------------------------------------
// console.log("start")
// function sayHi() {
//     console.log('Hello');
// }
// let id = setInterval(sayHi, 1000);
// console.log("end");

// let counter = 0;
// let timerId = setInterval(() => console.log(counter++), 1000);

// setTimeout(() => {
//     clearInterval(timerId);
//     console.log('setInterval is cleared');
// }, 4000)



// function cb1(phrase, who) {
//     console.log(phrase, who);
//     console.log('callback1');
// }

// setTimeout(cb1, 1000, "Hello", "John");
// Promise.resolve()
//     .then(() => console.log('promise2'))     //p2

// Promise.resolve()
//     .then(() => console.log('promise1'))     //p1


// 'use strict'
//evaluating this keyword in async operation
// let person = {
//     name: "Anna Smith",
//     display: function () {
//         console.log(`Hello ${this.name}`);
//         setTimeout(function () { console.log(`Hello ` + this.name) }, 1000);
//         //setTimeout(() => { console.log(`Hello ` + this.name) }, 1000);
//     }
// }
// person.display();




function cb1() {
    console.log('callback1');
    Promise.resolve("p1").then(cb4)
}
function cb3() {
    console.log('callback3');
}
function cb4() {
    console.log('callback4');
}
function cb5() {
    console.log('callback5');
}
setTimeout(cb1, 0);
setTimeout(cb3, 0);
Promise.resolve("my data").then(cb4);
Promise.reject("my error").catch(cb5);


// console.log('start');
// function sum(num1,num2) {
//     return num1 + num2;
// }

// const timerId = setInterval(sum, 2000, 5, 10);
// console.log('end');




