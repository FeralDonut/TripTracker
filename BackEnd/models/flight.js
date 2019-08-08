const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FlightSchema = new Schema({
    flight_number: string,
    when:Date,
    carrier: String,
    confirmation: String
}, {timestamps: true});

//create model for location
module.exports = mongoose.model("Flight", FlightSchema);
