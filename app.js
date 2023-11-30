const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { connectToDB, getDB } = require('./db');
const Product = require('./model/product')

const Revi = require('./controller/reviewsController');
app.use(express.json())

let db
connectToDB((error) => {
    if (!error){
        app.listen(3000, () => {
            console.log('app listening at 3000')
        })
        db = getDB()
    }
})

mongoose.connect('mongodb+srv://sneilhhh:OjlUAb95kZzRTy8z@cluster0.foa5oyg.mongodb.net/productReviews?retryWrites=true&w=majority');


// for product
app.get('/', (req, res) => {
    res.send('<h1>Welcome to product api</h1>');
});

app.post('/api/products', (req, res) => {
    const { name, description, price, category } = req.body;

    const newProduct = new Product({
        name, description, price, category, reviews
    });

    newProduct.save()
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log(error);
    })
})

app.get('/api/products/:productId', (req, res) => {
    Product.findById(req.params.productId)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log(error);
    })
})

app.put('/api/products/:productId', (req, res) => {
    Product.findByIdAndUpdate(req.params.productId, {name, description, price, category }, {new : true})
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log(error);
    })
})


app.delete('/api/products/:productId', (req, res) => {
    Product.findByIdAndDelete(req.params.productId)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log(error);
    })
})


// for review

app.use('/', Revi);



