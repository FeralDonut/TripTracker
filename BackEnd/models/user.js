const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

//create schema for todo
const UserSchema = new Schema({
    email: {
        type: String,
        index: true,
        unique: true,
        required: [true, 'We need someway to contact you!']
    },
    password: {
        type: String,
        required: [true, "Passwords are important..."]
    },
    firstName: {
        type: String,
        lowercase: true,
        required: [true, "Everyone has a name!"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid']
    },
    lastName: {
        type: String,
        lowercase: true,
        required: [true, "Everyone has a name!"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid']
    },
    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip',
    }]
}, {timestamps: true});

//create model for todo
const User = mongoose.model('User', UserSchema);
