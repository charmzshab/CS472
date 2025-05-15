import url from 'url';
import path from 'path';
import fs from 'fs';

// console.log(import.meta.url);
// Convert to a regular file path
const __filename = url.fileURLToPath(import.meta.url);
// console.log(__filename);
const __dirname = path.dirname(__filename);
// console.log(__dirname);
// join method joins multiple path segments into a single valid file path
const filePath = path.join(__dirname, 'files', 'input.txt');
console.log(filePath);
// Reading from file synchronously
const content = fs.readFileSync(filePath, 'utf8');
console.log('File Content:', content);