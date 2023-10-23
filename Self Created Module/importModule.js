let names = require('./exportModule');


console.log(names); //Prints all the information from export Module
console.log(`My name is ${names.personName.name1} ${names.personName.name2} and my cast is ${names.personName.name3}`);

// if this function is called in export module file  
//then it automatically give the output in import file if it is imported in import module file

names.testingFunction(); 