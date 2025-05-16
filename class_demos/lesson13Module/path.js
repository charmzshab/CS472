import url from "url";
import path from "path";
import fs from "fs";

console.log(import.meta.url); //import.meta.url gives you the absolute URL of the current module file — basically, the full path to the file that’s currently running.

// // Convert to a regular file path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("Current file name:", __filename);
console.log("Current directory name:", __dirname);

// // join method joins multiple path segments into a single valid file path
const filePath = path.join(__dirname, "input.txt");

// // Reading from file synchronously
const content = fs.readFileSync(filePath, "utf8");
console.log("File Content:", content);
