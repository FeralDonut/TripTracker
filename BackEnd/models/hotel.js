const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const HotelSchema = new Schema({
    name: String,
    start_date:Date,
    end_date: Date,
    confirmation: String
}, {timestamps: true});

//create model for location
module.exports = mongoose.model("Hotel", HotelSchema);
