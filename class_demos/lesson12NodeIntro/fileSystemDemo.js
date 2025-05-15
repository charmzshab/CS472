const fs = require('fs');

// console.log('first');
// fs.readFile('./input.txt', "utf-8", (err, data) => {
//     if (err)
//         console.log('there is an error. can not read from file');
//     else
//         console.log(data)
// }); //async
// console.log('third');

// console.log('first');
// fs.readFile(__filename, "utf-8", () => {
//     console.log('reading from file');
// });
// fs.readFile('./input.txt', "utf-8", (err, data) => {
//     if (err)
//         console.log('there is an error. can not read from file');
//     else
//         console.log(data)
// });
// Promise.resolve().then(() => console.log('Promise.resolve 1'));
// process.nextTick(() => console.log('nextTick 1'));
// setTimeout(() => console.log('setTimeout 1'), 0);
// console.log('third');
// setImmediate(() => console.log('setImmediate'));

// setTimeout(() => { console.log('timeout'); }, 0);
// setImmediate(() => { console.log('immediate'); });
// process.nextTick(() => console.log('nexttick'));

// fs.readFile('input.txt', () => console.log('readFile'));
// setTimeout(() => console.log("this is setTimeout"), 0);
// setImmediate(() => console.log("this is setImmediate"));
// Promise.resolve().then(() => console.log('Promise.resolve 1'));
// process.nextTick(() => console.log('nextTick 1'));
// for (let i = 0; i < 200000000; i++) { }


// console.log('first');
// fs.readFile('./input.txt', "utf-8", (err, data) => {
//     if (err)
//         console.log('there is an error. can not read from file');
//     else
//         console.log(data)
// }); //async
// let data = fs.readFileSync('./input.txt', "utf-8"); //sync
// console.log(data);
// console.log('third');