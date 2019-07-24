const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const PhotoModel = require('./photo');
const Address = require('./address');

//create schema for blogPost
const RestaurantSchema = new Schema({
    name: {
        type: String,
        index: true,
        required: [true, 'All blogs need a title.']
    },
    category : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
    address: {
        type: Address.schema,
        // required: true
    },
    photos: [PhotoModel.schema]
}, {timestamps: true});

//create model for Restaurant
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
