const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name : {
        type : String
    },
    description : {
        type : String
    },
    price : {
        type : Number
    },
    category : {
        type : String
    },
});

const review = mongoose.model('review', reviewSchema);

module.exports = review;