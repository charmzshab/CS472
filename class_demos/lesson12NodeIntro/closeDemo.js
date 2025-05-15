const fs = require('fs');

const rd = fs.createReadStream("input.txt");
rd.close();
rd.on("close", () => {
    console.log('readablStream closed ');
    process.nextTick(() => console.log('nextTick 2'));
    Promise.resolve().then(() => console.log('Promise.resolve 2'));
})
setTimeout(() => console.log("this is setTimeout"), 0);
setImmediate(() => console.log("this is setImmediate"));
fs.readFile('./input.txt', "utf-8", (err, data) => {
    if (err)
        console.log('there is an error. can not read from file');
    else
        console.log(data)
});