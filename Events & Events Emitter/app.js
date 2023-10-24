const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();
let count = 0;

event.on('apiCount', ()=>{
    count++;
    console.log('API Called', count);
});

app.get('/', (req, res)=>{
    res.send('This is Home Page');
    event.emit('apiCount');
});

app.get('/about', (req, res) => {    
    res.send('This is some information about our Page');
    event.emit('apiCount');
});

app.get('/update', (req, res) => {
    res.send('This information is update successfully');
    event.emit('apiCount');
});

app.listen(3000);