var Post = require('../models/post');
var Trip = require('../models/trip');
var PackingEntry = require('../models/packingEntry');

exports.packinglist_create = function(req, res, next){
    Trip.findById(req.params.trip_id, function(err, trip) {
        if (err)
            return (err);

        new_item = new PackingEntry(req.body);

        if(trip.packing_list == undefined){
            trip.packing_list = [new_item];

        }
        else{
            trip.packing_list.push(new_item);
        }

        trip.save(function(err) {
            if (err)
                res.send(err);
            res.json(new_item);
        });

    });
};

exports.packinglist_view = function(req, res, next) {
    Trip.findById(req.params.trip_id, 'title packing_list', function(err, trip) {
        if (err)
            return (err);
        toReturn = trip.packing_list.id(req.params.entry_id);

        // Figure a way o
        if (!toReturn)
            res.send(403, "You don't have the right to view this");
        else
            res.json(toReturn.toJSON());
    });
};

exports.packinglist_delete = function(req, res, next) {
    console.log(req.params);
    Trip.findById(req.params.trip_id, function(err, post) {
        if (err)
            return (err);

        post.packing_list.pull(req.params.entry_id);

        post.save(function(err) {
            if (err)
                res.send(err);

            res.json(post);
        });

    });
};


exports.packinglist_update = function(req, res, next){
    Trip.findById(req.params.trip_id, function(err, trip) {
        var post = trip.packing_list.id(req.params.entry_id).set(req.body);
        trip.save().then(function(savedTrip) {
            var toReturn = savedTrip.packing_list.id(req.params.entry_id);
            res.send(toReturn);
        }).catch(function(error) {
            res.status(500).send(err);
        })
    })
};