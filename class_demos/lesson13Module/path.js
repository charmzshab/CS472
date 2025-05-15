import url from 'url';
import path from 'path';
import fs from 'fs';

console.log(import.meta.url);

// // Convert to a regular file path
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // join method joins multiple path segments into a single valid file path
// const filePath = path.join(__dirname, 'input.txt');

// // Reading from file synchronously
// const content = fs.readFileSync(filePath, 'utf8');
// console.log('File Content:', content);


