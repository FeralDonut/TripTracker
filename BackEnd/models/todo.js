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
    },
    relatedObject : {
        type: Schema.Types.ObjectId,
        required: false,
        refPath: 'relatedModel'
    },
    relatedModel: {
        type: String,
        enum: ["Restaurant", "Attraction"],
        required: [
            function() {
                return this.relatedItem != null;
            },
            'If related Item is set, model type must be specified'
        ]
    },
}, {timestamps: true});


module.exports = mongoose.model('ToDo', TodoSchema);