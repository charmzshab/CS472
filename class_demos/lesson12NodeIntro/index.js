// let fs = require('fs')
// console.log(global);
// console.log(globalThis == global);

// console.log('start');
// process.nextTick(() => { console.log('nextTick 1'); })
// Promise.resolve().then(() => { console.log('Promise 1') })
// Promise.resolve().then(() => {
//     console.log('Promise 2')
//     process.nextTick(() => { console.log('inner nextTick 1'); })
// })
// Promise.resolve().then(() => { console.log('Promise 3') })
// process.nextTick(() => { console.log('nextTick 2'); })
// console.log('end');


// setTimeout(() => console.log('settimeout 1'), 0);
// setTimeout(() => {
//     console.log('settimeout 2')
//     process.nextTick(() => console.log('nextTick inside setTimeout'));
// }, 0);
// setTimeout(() => console.log('settimeout 3'), 0);
// Promise.resolve().then(() => console.log('Promise.resolve 1'));
// Promise.resolve().then(() => console.log('Promise.resolve 2'));
// process.nextTick(() => console.log('nextTick 1'));
// process.nextTick(() => console.log('nextTick 2'));





// console.log('first');
// fs.readFileSync('input.txt1', 'utf-8', (err, data) => {
//     if (err) console.log('error');
//     else
//         console.log(data)
// });
// console.log('third');

// fs.readFile('input.txt', () => console.log('readFile'));
// setTimeout(() => console.log("this is setTimeout"), 0);
// setImmediate(() => console.log("this is setImmediate"), 0); Promise.resolve().then(() => console.log('Promise.resolve 1'));
// process.nextTick(() => console.log('nextTick 1'));


// setTimeout(() => console.log("this is setTimeout..."), 0);
// fs.readFile('input.txt', () => console.log('readFile'));
// setTimeout(() => console.log("this is setTimeout..."), 1000);
// setImmediate(() => { console.log('immediate'); });

// let s = 0
// for (let i = 0; i < 200000000; i++) { s++ }

function askPassword(ok, fail) {
    let password = prompt("Password?", ''); // The prompt() function returns the user's input as a string.
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'John',

    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};



askPassword(user.login(true).bind(user), user.login(false).bind(user));





// console.log('start');
// process.nextTick(() => console.log('nextTick 1')); //cb1
// process.nextTick(() => { //cb2
//     console.log('nextTick 3');
//     process.nextTick(() => console.log('inner nextTick 1'));//cb3
// });
// process.nextTick(() => console.log('nextTick 2'));//cb4
// Promise.resolve().then(() => console.log('promise 1'));//cb5
// Promise.resolve().then(() => {//cb6
//     console.log('promise 2')
//     process.nextTick(() => console.log('inner nextTick 2'));//cb7
// });
// Promise.resolve().then(() => {//cb8
//     console.log('promise 3');
//     Promise.resolve().then(() => console.log('promise 4'));//cb9
// });
// console.log('end');



// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//     console.log("this is process.nextTick 2");
//     process.nextTick(() =>
//         console.log("this is the inner next tick inside next tick")
//     );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//     console.log("this is Promise.resolve 2");
//     process.nextTick(() =>
//         console.log("this is the inner next tick inside Promise then block")
//     );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));












// console.log('start');
// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => console.log("this is process.nextTick 2"));
// process.nextTick(() => console.log("this is process.nextTick 3"));
// Promise.resolve().then(() => { console.log("this is Promise.resolve 1") });
// Promise.resolve().then(() => { console.log("this is Promise.resolve 2") });
// Promise.resolve().then(() => { console.log("this is Promise.resolve 3") });
// console.log('end');