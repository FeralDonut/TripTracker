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
    blog : [PostModel.schema],
    start_date : Date,
    end_date: Date,
    locations : [Location.schema],
    packing_list : [PackingEntry.schema],
    todos : [ToDo.schema],
    photos: [PhotoModel.schema]
}, {timestamps: true});

module.exports = mongoose.model("Trip", TripSchema);

