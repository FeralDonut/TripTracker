var Post = require('../models/post');
var Trip = require('../models/trip');
var Restaurant = require('../models/restaurant');

exports.restaurant_create = function(req, res, next){
    Trip.findById(req.params.trip_id, function(err, restaurant) {
        if (err)
            return (err);

        new_item = new Restaurant(req.body);

        if(restaurant.restaurants == undefined){
            restaurant.restaurants = [new_item];

        }
        else{
            restaurant.restaurants.push(new_item);
        }

        restaurant.save(function(err) {
            if (err)
                res.send(err);
            console.log("no error!");
            console.log(new_item);
            res.json(new_item);
        });

    });
};

exports.restaurant_view = function(req, res, next) {
    Trip.findById(req.params.trip_id, 'title restaurants', function(err, trip) {
        if (err)
            return (err);
        toReturn = trip.restaurants.id(req.params.restaurant_id);

        // Figure a way o
        if (!toReturn)
            res.send(403, "You don't have the right to view this");
        else
            res.json(toReturn.toJSON());
    });
};

exports.restaurant_delete = function(req, res, next) {
    console.log(req.params);
    Trip.findById(req.params.trip_id, function(err, post) {
        if (err)
            return (err);

        post.restaurants.pull(req.params.restaurant_id);

        post.save(function(err) {
            if (err)
                res.send(err);

            res.json(post);
        });

    });
};


exports.restaurant_update = function(req, res, next){
    Trip.findById(req.params.trip_id, function(err, trip) {
        var post = trip.restaurants.id(req.params.restaurant_id).set(req.body);
        trip.save().then(function(savedTrip) {
            var toReturn = savedTrip.restaurants.id(req.params.restaurant_id);
            res.send(toReturn);
        }).catch(function(error) {
            res.status(500).send(err);
        })
    })
};