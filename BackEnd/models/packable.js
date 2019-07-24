const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const PhotoModel = require('./photo');

// Model to represent what can be packed
const PackableSchema = new Schema({
    title: {
        type: String,
        index: true,
        required: [true, 'All items need a title!']
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    icon: PhotoModel.schema
}, {timestamps: true});

//create model for packable
const Packable = mongoose.model('Packable', PackableSchema);

module.exports = Packable;
