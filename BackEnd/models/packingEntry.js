const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Packable = require('./packable');


const PackingEntrySchema = new Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Packable',
        required: true
    },
    count: {
        type: Number,
        required:true,
        default:1
    },
    packed: {
        type: Boolean,
        required:true,
        default: false
    },
    packed_on: {
        type: Date
    }
}, {timestamps: true});

//create model for location
module.exports = mongoose.model("PackingEntry", PackingEntrySchema);
