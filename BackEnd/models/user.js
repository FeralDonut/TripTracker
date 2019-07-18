const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const UserSchema = new Schema({
    email: {
        type: String,
        index: {unique: true},
        required: [true, 'We need someway to contact you!']
    },
    password: {
        type: String,
        required: [true, "Passwords are important..."]
    }
})

//create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;