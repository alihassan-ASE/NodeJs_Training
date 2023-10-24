const fs = require('fs');
const { resolve } = require('path');

// Promise Setup

const getText = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                console.log('wrong path');
            }
            resolve(data);
        })
    })
}

getText('./read/subfolder/text.txt')
    .then((result) => { console.log(result); })
    .catch((err) => { console.error(err); });



// Refactoring the Promise into Async Await
const start = async () => {
    try {
        let newGetText = await getText('./read/subfolder/text1.txt');
        console.log(newGetText);
    }
    catch(err){
        console.log(err);
    }
}

start();


// Also i can do this by utils that is built in module to return promise

const util = require('util');

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

readFilePromise('./read/subfolder/text.txt', 'utf8')
    .then((result) => {
        writeFilePromise('./read/subfolder/write.txt', `This Text is from other file: ${result}` )
    })
    .catch((err)=>{
        console.log(err);
    })