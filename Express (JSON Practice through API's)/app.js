const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const {products} = require('./products');

// // Express Static also known as MiddleWARE
// app.use(express.static('./public'));

// You can also skip this step by just adding index.html file in public folder you have made that is Middleware

app.get('/products', (req, res)=>{
    const allProducts = products.map((product) => { 
        const {id, title, price, image, rating} = product;
        return {id, title, price, image, rating};
    });
    res.status(200).json(allProducts);
})

app.get('/products/:productID', (req, res)=>{
    const {productID} = req.params;
    const singleProduct = products.find((product) => {
        product.id === Number(productID);
        return product;
    });
    const {id, title, price, image, rating} = singleProduct;
    res.json({id, title, price, image, rating});
})

app.all('*', (req, res)=>{
    res.status(404).send('Route Not Found')
})

app.listen(2500, ()=> {
    console.log(`Server is Running on Port http://localhost:2500`);
})
