import fs from 'fs/promises';

async function loadModuleFile(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        return content;
    } catch (err) {
        console.error('Failed to read module file:', err);
    }
}

loadModuleFile('./files/input.txt')
    .then((content) => { console.log('Module content:', content); })
    .catch(err => console.log(err));


//or

try {
    const content = await fs.readFile('./files/input.txt', 'utf8');
    console.log('Module content:', content);
} catch (err) {
    console.error('Failed to read module file:', err);
}







