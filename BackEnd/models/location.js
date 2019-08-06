const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Address = require('./address');


const LocationSchema = new Schema({
    address: {
        type: Address.schema,
    },
    start_date: {
        type: Date,
            required:true
    },
    end_date: {
        type: Date,
            required: true
    }
}, {timestamps: true});

//create model for location
module.exports = mongoose.model("Location", LocationSchema);
