const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required']
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

//create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;