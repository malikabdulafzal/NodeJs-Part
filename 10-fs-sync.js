const {readFileSync,writeFileSync} = require('fs');
// const fs = require('fs');
// fs.readFileSync

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
console.log(first , second);

// writeFileSync
// its accept two arguments 
// -> 1st for in which file where we want to write and if the file is not exist ofcourse node will create the file.
// 2nd -> the value that we want to pass
writeFileSync('./content/result-sync.text', `Here is the result : ${first}, ${second}`,{flag:'a'});