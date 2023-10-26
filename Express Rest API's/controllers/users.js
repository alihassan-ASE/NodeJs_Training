const express = require('express');
const fs = require('fs');
const usersData = require('../MOCK_DATA.json');


const getAllUsers = (req, res) => {
    if(usersData.length < 1){
        res.status(404).send('Users Not Found');
    }
    return res.json(usersData);
}

const getSingleUser = (req, res) => {
    const ID = Number(req.params.ID);
    const user = usersData.find((user)=>user.id === ID);
    if(!user){
        res.status(400).send('User Not Found');
    }
    else {
        return res.json(user);
    }
}

const addUser = (req, res) => {
    const body = req.body;
    if (body.first_name === '' || body.last_name === '' || body.email === ''|| body.gender === ''|| body.job_title === ''){
        res.status(401).send('one or more fields is/are empty');
    }
    else {
        usersData.push({id: usersData.length + 1, ...body});
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(usersData), (err, data)=> {
            if(err){
                res.status(400).send('Data Not Added');
            }
            else {
                res.send(`User SuccessFully Added with ID: ${usersData.length}`);
            }
        });
    }
}

const updateUser = (req, res)=>{
    const body = req.body;
    const ID = Number(req.params.ID);
    let userIndex = usersData.findIndex((user)=>user.id === ID);
    if(userIndex === -1){
        res.status(400).send('User Not Found Update');
    }
    else {
        usersData[userIndex] = {id: ID, ...body};
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(usersData), (err, data)=> {
            if(err){
                res.status(400).send('Data Not Update');
            }
            else {
                res.send(`User with ID: ${ID} SuccessFully Updated`);
            }
        });
    }
}

const deleteUser = (req, res) => {
    const ID = Number(req.params.ID);
    const userIndex = usersData.findIndex((user)=>user.id === ID);
    if(userIndex === -1){
        res.status(400).send('User Not Found To Delete');
    }
    else{
        usersData.splice(userIndex, 1);
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(usersData), (err, data)=> {
            if(err){
                res.status(400).send('Data Not Deleted');
            }
            else {
                res.send(`User with ID: ${ID} SuccessFully Deleted`);
            }
        });
    }
}


module.exports = {
    getAllUsers,
    getSingleUser,
    addUser,
    updateUser,
    deleteUser
}