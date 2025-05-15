import path from 'path';
import fs from 'fs';
import url from 'url';

console.log(import.meta.url);
let __filename = url.fileURLToPath(import.meta.url);
console.log(__filename);
let __dirname = path.dirname(__filename);
console.log(__dirname);

// Reading from a file: 
fs.readFile(path.join(__dirname, '/files/input.txt'),
    { encoding: 'utf-8' }, function (err, data) {
        if (err) throw err;
        console.log(data);
    });
// Writing to a file: 
// console.log(path.join(__dirname, '//files', '//output.txt'));
fs.writeFile(path.join(__dirname, 'files', 'output.txt'), 'Hello World!', function (err) {
    if (err) throw err;
    console.log('Done');
});



