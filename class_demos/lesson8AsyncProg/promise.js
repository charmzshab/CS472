

// console.log('start');
// var giveMePizza = function () {
//     return new Promise(function (resolve, reject) {
//         if (true) {
//             console.log('resolved');
//             resolve("This is true"); // then() will be called
//         } else {
//             reject("This is false"); // catch() will be called
//             console.log('reject section');
//         }
//     })
// }
// let promise = giveMePizza()
// console.dir(promise);
// console.log(Promise.prototype);
// promise.then(data => console.log(data))
//     .catch(err => console.error(err));
// console.log('end');


// function executor(resolve, reject) {//sync
//     console.log(`Promise starts`) //sync
//     reject(`Promise error`) //sync
//     console.log(`Promise ends`) //sync
// }
// const promise = new Promise(executor)//sync
// console.log(`Code starts`)//sync
// promise
//     .then(data => console.log(data))//async
//     .catch(err => console.log(err))//async
//     .finally(() => console.log('Finally'))//async
// console.log(`Code ends`)

// const promise = new Promise((resolve, reject) => {
//     reject(new Error("Error"));
//     setTimeout(() => { resolve('Promise results') }, 1000); // resolve after 1 second
// });

// console.log('Code starts');
// promise
//     .then(data => console.log(data))
//     .catch(e => console.log(e))
// console.log('I love JS');


// const promise = new Promise((resolve, reject) => {
//     // reject("Error");
//     resolve("Helllo");
//     setTimeout(() => { resolve('Promise results') }, 1000); // resolve after 1 second
// });
// console.log(promise);
// console.log('Code starts');
// promise.then(console.log).catch(e => console.log(e))
// console.log('JS is interesting');


// const promise = new Promise((resolve, reject) => {
//     console.log('executor');
//     // resolve("Helllo");
//     reject("Error");

// });
// console.log(`Code starts`)
// promise.then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Finally'));
// console.log(`Code ends`)



let promise = new Promise(function (resolve, reject) {
    const random = Math.random();
    console.log(' random: ', random);
    if (random > 0.5)
        setTimeout(() => resolve("done"), 1000);
    else
        setTimeout(() => reject(new Error("Woops!")), 1000)
});
promise.then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('Promise ready!'));


// let promise1 = new Promise((resolve, reject) => {
//     const random = Math.random();
//     console.log(' random: ', random);
//     if (random > 0.5) {
//         setTimeout(() => {
//             resolve("done")
//         }, 3000);
//     }

//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject(new Error("Woops!"))
//             }, 1000);

//         })
//     }
// });

// try {
//     let result = await promise1;
//     console.log(result);
// }
// catch (error) {
//     console.log(error);
// }
// finally {
//     console.log('Promise ready!')
// }


// function handleWorkPromise() {
//     return new Promise((resolve, reject) => {
//         // Slow method that runs in the background
//         const success = graded()
//         if (success) {
//             resolve("Exam result is ready")
//         } else {
//             reject("postphoned")
//         }
//     })
// }

// const promise = handleWorkPromise()
// promise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.error(error)
// })



// async function foo() {
//     console.log('hello foo');
//     return ' done ! ';
// }
// console.log('start');
// foo();
// console.log('end');


// async function foo() {
//     console.log('hello foo');
//     // throw new Error("rejected");
//     return 1;
// }

// console.log('start');
// foo()
//     .then(result => result * 2)
//     .then(result => result * 2)
//     .catch(console.log);

// (async () => {
//     try {
//         let result = await foo();
//         console.log(result);
//         result = await Promise.resolve(result * 2);
//         console.log(result);
//         result = await Promise.resolve(result * 2);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }

// })()


// console.dir(r);
// let result1 = await foo();
// console.log(result1);

// console.log('end');


// syntax error in top-level code
// async function baz() {
//     return ' baz...';
// }
// let result = await baz()
// console.log(result);

// //solution 1
// (async () => {
//     let result = await baz()
//     console.log(result);
// })()

// //solution 2
// //use ES module
// let result = await baz()

// console.log('start');
// const promise = new Promise((resolve, reject) => {
//     console.log('inside Promise executor');
//     setTimeout(() => {  // cb1
//         resolve('Promise results');
//         console.log('setTimout 1');
//     }, 1000);
// });
// console.log('JS is interesting');
// setTimeout(() => console.log("setTimeout 2")) //cb2
// promise
//     .then(console.log)   //cb3
//     .catch(e => console.log(e))  //cb4
// console.log('end');


// console.log('start');
// setTimeout(() => console.log("setTimeout 1"), 1000) //cb1
// setTimeout(() => { //cb2
//     console.log("setTimeout 2");
//     Promise.resolve('promise 2').then(console.log); //cb3
// })
// const promise = Promise.resolve('promise 1').then(console.log);//cb4
// setTimeout(() => console.log("setTimeout 3"))//cb5
// console.log('end');

