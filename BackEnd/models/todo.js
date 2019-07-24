const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
    title: {
        type: String,
        required: [true, 'The todo text field is required']
    },
    description: {
        type: String,
    },
    related_item : {
        type: mongoose.Schema.Types.ObjectId,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    completedOn: {
        type: Date,
        requifed: false,
        default: null,
    }
}, {timestamps: true});


const User = mongoose.model('Todo', TodoSchema);