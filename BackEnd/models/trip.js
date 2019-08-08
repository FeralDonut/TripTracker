const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const PhotoModel = require('./photo');
const Address = require('./address');
const PostModel = require('./post');
const PackableSchema = require('./packable');
const Location = require('./location');
const ToDo = require('./todo');
const PackingEntry = require('./packingEntry');
const Flight = require('./flight');
const Restaurant = require('./restaurant');
const Hotel = require('./hotel');
const Transport = require('./transport');


//create schema for trip
const TripSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    start_date : Date,
    end_date: Date,
    location : {type: Address.schema,
                required: true},
    packing_list : [PackingEntry.schema],
    blog : [PostModel.schema],
    restaurants: [Restaurant.schema],
    todos : [ToDo.schema],
    important_info: {
        flights: [Flight.schema],
        hotels: [Hotel.schema],
        transport: [Transport.schema]
    },
    photos: [PhotoModel.schema]
}, {timestamps: true});

module.exports = mongoose.model("Trip", TripSchema);

