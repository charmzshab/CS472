// console.log('start');
// new Promise(function (resolve, reject) {
//     console.log('1....');

//     if (Math.random() > 0.5) {
//         setTimeout(() => resolve('Hello'), 2000);
//     } else {
//         setTimeout(() => reject('Whoops'), 3000);
//     }

//     console.log('2....');
// }).then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log('inside finally'));
// console.log('end');


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000)
// })
// promise.then(result => {
//     console.log(result);
//     return result * 2; //return Promise.resolve(result*2)
// }).then(result => {
//     console.log(result);
//     return Promise.reject("error");
//     // return result * 2;  //Promise.resolve(result*2)
// }).then(result => {
//     console.log(result);
//     return result * 2; //Promise.resolve(result*2)
// }).catch(err => console.log(err))
//     .finally(() => console.log('finally'))


// console.log('start'); //sync
// async function foo() { // return a promise
//     return ' done ! ';  //Promise.resolve(' done ! ')
// }
// async function bar() {
//     try {
//         console.log(' insidebar - start'); //sync
//         let result = await foo(); //async
//         console.log(result);//async
//         console.log('insidebar - end');//async
//     }
//     catch (error) {
//         console.log(error);
//     }
//     finally {
//         console.log('finally')
//     }

// }
// bar().then(data => console.log(data));
// console.log('end'); //sync

async function baz() {
    return ' baz...';
}

let result = await baz(); // Syntax Error console. log( result); 
console.log(result); //Syntax Erro



// console.log('start'); //sync
// function foo() { // return a promise
//     return Promise.resolve(' done !');
// }
// function bar() {

//     console.log(' insidebar - start'); //sync
//     foo().then(result => {
//         console.log(result);
//         console.log('insidebar - end');
//     }).catch(e => console.log(e))
//         .finally(() => console.log('finally'))
//     return Promise.resolve();
// }
// bar();
// console.log('end'); //sync
