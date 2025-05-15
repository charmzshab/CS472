// import fs from "fs";
// const fs = require('fs'); //commonjs

// process.nextTick(() => { console.log('nextTick 1') });
// Promise.resolve().then(() => console.log('promise 1'));
// setImmediate(() => {
//     console.log('setImmediate 1')
//     process.nextTick(() => console.log('nextTick fn'));
//     Promise.resolve().then(() => console.log('promise fn'));
// });
// setTimeout(() => console.log('setTimeout 1'), 0);
// fs.readFile('./files/input.txt', "utf-8", (err, data) => {
//     if (err)
//         console.log('there is an error. can not read from file');
//     else {
//         console.log(data);

//     }
// });

// import fs from "fs";
// process.nextTick(() => console.log('nextTick 1'));
// Promise.resolve().then(() => console.log('promise 1'));
// setImmediate(() => { console.log('setImmediate 1') });
// setTimeout(() => console.log('setTimeout 1'), 0);
// fs.readFile('./files/input.txt', "utf-8", (err, data) => {
//     if (err)
//         console.log('there is an error. can not read from file');
//     else {
//         console.log(data);
//     }
// });


import pfs from 'fs/promises';
import fs from 'fs';

try {
    const content = await pfs.readFile('./files/input.txt', 'utf8');
    console.log('Module content:', content);
} catch (err) {
    console.error('Failed to read module file:', err);
}
fs.readFile('./files/input.txt', "utf-8", (err, data) => {
    if (err)
        console.log('there is an error. can not read from file');
    else {
        console.log(data);
    }
});
setImmediate(() => { console.log('setImmediate 1') });


