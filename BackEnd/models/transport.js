const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TransportSchema = new Schema({
    name: String,
    when:Date,
    confirmation: String
}, {timestamps: true});

//create model for location
module.exports = mongoose.model("Transport", TransportSchema);
