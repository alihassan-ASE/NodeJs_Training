
let sayHi = 'Hello, How are you';
let personName = {
    name1: 'Ali',
    name2: 'Hassan',
    name3: 'Mughal'
}

let array = ['Focusteck', 'online', 'Johar Town'];
let myObject = {
    CompaniesName: 'Focusteck'
} 

function testingFunction(){
    console.log('This is my function in export module file');
}
testingFunction();

module.exports = {array, personName, myObject, sayHi, testingFunction};