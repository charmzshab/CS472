
// process.nextTick(() => console.log('nextTick 1'));
// setTimeout(() => console.log('setTimeout'), 0);
// new Promise(resolve => resolve(`Hi`))
//     .then(() => console.log(`promise 1`))
// process.nextTick(() => console.log(`nextTick 2`));



// console.log('start');
// process.nextTick(() => console.log('nextTick 1')); //cb1
// Promise.resolve().then(() => console.log('promise 1'));//cb2
// setTimeout(() => console.log('setTimeout 1'), 0); //cb3
// setTimeout(() => {//cb4
//     console.log('setTimeout 2')
//     Promise.resolve().then(() => console.log('promise 2'));//cb5
// }, 0);
// setTimeout(() => {//cb6
//     console.log('setTimeout 3')
//     process.nextTick(() => console.log('nextTick 2'));//cb7
// }, 0);
// console.log('end');

// console.log('start');
// process.nextTick(() => console.log('nextTick 1')); //cb1
// Promise.resolve().then(() => console.log('promise 1'));//cb2
// setTimeout(() => console.log('setTimeout 1'), 3000); //cb3 ==> it has delay time as 3 seconds
// setTimeout(() => {//cb4
//     console.log('setTimeout 2')
//     Promise.resolve().then(() => console.log('promise 2'));//cb5
// }, 0);
// setTimeout(() => {//cb6
//     console.log('setTimeout 3')
//     process.nextTick(() => console.log('nextTick 2'));//cb7
// }, 0);
// console.log('end');