const fs = require('fs');

// This is Syncronous way to read and write file

let readFile = fs.readFileSync('./Read/text.txt', 'utf8');
console.log(readFile);

// flag a is used to not override and write new value in file without removing the previous
fs.writeFileSync('./Write/write.txt', `This file is automatically created if it is not present and this text is written in it.`, {flag: 'a'});
// if used nothing (no flag) if overrides the data




//This is async way to read and write file

// fs.readFile('./Read/text.txt', 'utf8', (err, result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     fs.writeFile('./Write/write.txt', `This is the text from read file written asyncronously : ${result}`, {flag: 'a'}, (err, result) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('SuccessFully Written');
//     });
// })