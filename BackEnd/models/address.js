const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GeoPoint = require('./geo_point');
//create schema for location

const AddressSchema = new Schema({
    line1: {
        type: String,
    },
    line2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    region: {
        type: String,
    },
    zip: {
        type: String,
    },
    country: {
        type: String,
        required: true
    },
    gps: {
        type: GeoPoint.schema,
        required: false
    }
}, {timestamps: true});

//create model for location
module.exports = mongoose.model("Address", AddressSchema);

