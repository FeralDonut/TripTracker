const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const PhotoModel = require('./photo');
const AddressSchema = require('./address');
const PostSchema = require('./post');
const PackableSchema = require('./packable');
const TodoSchema = require('./todo');


//create schema for trip
const TripSchema = new Schema({
    blog : [PostSchema.PostSchema],
    start_date : Date,
    end_date: Date,
    locations : [{
        address: AddressSchema.AddressSchema,
        start_date: {
            type: date,
            required:true
        },
        end_date: {
            type: date,
            required: true
        }
    }],
    // accomodations: [{
    //
    // }],
    // travel: [{
    //
    // }],
    packing_list : [{
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
    }],
    todos : [{
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false
        },
        relatedItem : {
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
        completed: {
            type: Boolean,
            require: true,
            default: false
        },
        completed_on: {
            type: Date,
            required: false,
        },
        rank: {
            type: Number,
            required: false,
            default: 0,
            min: 0,
            max: 10
        }
    }],
    photos: [PhotoModel.schema]
}, {timestamps: true});

const Trip = mongoose.model('trip', TripSchema);

