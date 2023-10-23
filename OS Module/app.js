// OS Module

const os = require('os');

// Current information 
console.log("Current Users Information:", os.userInfo());

// System Uptime in seconds
console.log(`The systems uptime is: ${os.uptime()}`);


//OS Information

const  currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log("Current OS Information:", currentOS);
