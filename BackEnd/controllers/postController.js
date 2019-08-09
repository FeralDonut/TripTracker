var Post = require('../models/post');
var Trip = require('../models/trip');

exports.post_create = function(req, res, next){
    Trip.findById(req.params.trip_id, function(err, member) {
        if (err)
            return (err);

        new_post = new Post(req.body);

        if(member.blog == undefined){
            member.blog = [new_post];

        }
        else{
            member.blog.push(new_post);
        }

        member.save(function(err) {
            if (err)
                res.send(err);

            res.json(new_post);
        });

    });
};

exports.post_view = function(req, res, next) {
    Trip.findById(req.params.trip_id, 'title blog', function(err, trip) {
        if (err)
            return (err);
        toReturn = trip.blog.id(req.params.post_id).toJSON();
        toReturn.trip_title = "this is a test!";
        // Figure a way o
        if (err)
            res.send(err);
        else
            res.json(toReturn);
    });
};

exports.post_delete = function(req, res, next) {
    console.log(req.params);
    Trip.findById(req.params.trip_id, function(err, post) {
        if (err)
            return (err);

        post.blog.pull(req.params.post_id);

        post.save(function(err) {
            if (err)
                res.send(err);

            res.json(post);
        });

    });
};


exports.post_update = function(req, res, next){
    Trip.findById(req.params.trip_id, function(err, trip) {
        var post = trip.blog.id(req.params.post_id).set(req.body);
        trip.save().then(function(savedTrip) {
            var toReturn = savedTrip.blog.id(req.params.post_id);
            res.send(toReturn);
        }).catch(function(error) {
            res.status(500).send(err);
        })
    })
};