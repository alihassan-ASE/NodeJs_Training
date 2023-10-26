const express = require('express');
const app = express();
const usersData = require('./routes/users');
const PORT = 8000;

// When data is not in form of JSON
app.use(express.urlencoded({extended: false}));

// When you are sending data in body which is in JSON Form then use this MiddleWare
app.use(express.json());


app.use('/api/users', usersData);


app.listen(PORT, ()=>{
    console.log(`Server is Running at http://localhost:${PORT}`);
})
