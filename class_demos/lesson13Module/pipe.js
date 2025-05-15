import fs from 'fs';

const readable = fs.createReadStream('./imgs/dog.jpg');
const writable = fs.createWriteStream('./imgs/destinationImage.jpg');
readable.pipe(writable);