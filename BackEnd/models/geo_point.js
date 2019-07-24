const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoPointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});



module.exports = mongoose.model("GeoPoint", geoPointSchema);

