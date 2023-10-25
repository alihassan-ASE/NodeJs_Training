const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();


// Express Static also known as MiddleWARE
app.use(express.static('./public'));

//You can also skip this step by just adding index.html file in public folder you have made that is Middleware

app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './index/index.html'));
})

app.all('*', (req, res)=>{
    res.status(404).send('Route Not Found')
})

app.listen(2500, ()=> {
    console.log(`Server is Running on Port http://localhost:2500`);
})
