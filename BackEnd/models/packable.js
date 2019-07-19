const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

// Model to represent what can be packed
const PackableSchema = new Schema({
    title: {
        type: String,
        index: true,
        required: [true, 'All items need a title!']
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
    }
}, {timestamps: true});

//create model for todo
const Packable = mongoose.model('packable', PackableSchema);

module.exports = Packable;