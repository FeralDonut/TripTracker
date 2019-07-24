const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for photos
const PhotoSchema = new Schema({
    path: {
        type: String,
        index: true,
        required: [true, 'All a photo is']
    },
    caption: {
        type: String,
    },
}, {timestamps: true});

module.exports = mongoose.model("Photo", PhotoSchema);