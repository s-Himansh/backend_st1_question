const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content : {
        type : String
    },
    rating : {
        type : Number
    },
    author : {
        type :String
    }
});
 

module.exports = mongoose.model('review', reviewSchema);
