const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const PhotoModel = require('./photo');

//create schema for blogPost
const PostSchema = new Schema({
    title: {
        type: String,
        index: true,
        required: [true, 'All blogs need a title.']
    },
    published_on : {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        default: "",
        required: false,
    },
    body: {
        type: String,
        default: "",
        required: [true, "Users need *something* to read."]
    },
    photos: [PhotoModel.schema]
}, {timestamps: true});


module.exports = PostSchema;
