const path = require('path');


//first way to get path of file
let filePath = path.join('checkPath', 'checkingSubFolder', 'text.html');
console.log('This is file path by joining path:', filePath);

// To get base file (required file)

let baseFile = path.basename(filePath);
console.log('This is the base required file:', baseFile);


//to check absolute path
let absolutePath = path.resolve(__dirname, 'checkPath', 'checkingSubFolder', 'text.html');
console.log('This is an absolute/complete path of required file:',absolutePath);