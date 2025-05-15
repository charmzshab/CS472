import path from 'path';
import fs from 'fs';
import url from 'url';

let __filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

// Stream will read the file in chunks
// if file size is bigger than the chunk then it will read a chunk and emit a 'data' event. 
// Use highWaterMark to set the size of the chunk
const readable = fs.createReadStream(path.join(__dirname, '/files/input.txt'),
    { highWaterMark: 10, encoding: "utf-8" });

const writable = fs.createWriteStream(path.join(__dirname, '/files/destinationFile.txt'));

readable.on('data', function (chunk) {
    console.log(chunk);
    writable.write(chunk);
});
