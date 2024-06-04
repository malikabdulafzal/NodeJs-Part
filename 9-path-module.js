const path = require('path')

// separator property 
console.log(path.sep);
// answer is (/) but in different environment the value might be different.

const filePath = path.join('\content','subfolder','test.txt')
console.log(filePath);

// access base name 
const base = path.basename(filePath);
console.log(base);

// access path.resolve 
// it accept a sequence of path and  segment of path and resolves it into an absolute path.
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute); // now the abolsute path to test.txt

