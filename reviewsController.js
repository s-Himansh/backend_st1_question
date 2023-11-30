const express = require('express');
const Rev = require('../model/reviews');

const router = express.Router();


router.post('/api/products/:productId/reviews', (req, res) => {
    const { content, rating, price, author } = req.body;

    const newReview = new Rev({
        content, rating, price, author
    });

    newReview.save()
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log(error);
    })
})

router.put('/api/products/:productId/reviews/:reviewId', (req, res) => {
    Rev.findByIdAndUpdate(req.params.productId, { content, rating, price, author }, {new : true})
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log(error);
    })
})

router.delete('/api/products/:productId/reviews/:reviewId', (req, res) => {
    Rev.findByIdAndDelete(req.params.productId)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log(error);
    })
})