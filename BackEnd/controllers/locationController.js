var Location = require('../models/location');
var Trip = require('../models/trip');

exports.location_create = function(req, res, next){
    Trip.findById(req.params.trip_id, function(err, member) {
        if (err)
            return (err);

        new_location = new Location(req.body);

        if(member.locations == undefined){
            member.locations = [new_location];

        }
        else{
            member.locations.push(new_location);
        }

        member.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Location created!!!' });
        });

    });
};

exports.location_view = function(req, res, next) {
    Trip.findById(req.params.trip_id, 'title locations', function(err, trip) {
        if (err)
            return (err);
        console.log(req.params.location_id);
        toReturn = trip.locations.id(req.params.location_id);
        if (err)
            res.send(err);
        else
            res.json(toReturn);
    });
};

exports.location_delete = function(req, res, next) {
    console.log(req.params);
    Trip.findById(req.params.trip_id, function(err, trip) {
        if (err)
            return (err);

        var success = trip.locations.pull(req.params.location_id);

        trip.save(function(err) {
            if (err)
                res.send(err);

            res.json(trip);
        });

    });
};


exports.location_update = function(req, res, next){
    console.log(req.params);
    console.log(req.body);
    // var to_set = {
    //     : "It may work!",
    //     "body": "This will be the first body"
    // }
    Trip.findOneAndUpdate(
        {"_id": req.params.trip_id,"blog._id": req.params.post_id},
        {$set: {
                "blog.$": req.body
            }
        }
    )
        .then(data => res.json(data))
        .catch(next)
    //
    // Trip.findById(req.params.trip_id, function(err, member) {
    //     console.log(member);
    //     if (err)
    //         return (err);
    //
    //     var toUpdate = member.blog.id(req.params.post_id);
    //     toUpdate.update(req.body);
    //     // toUpdate.title = "GET FUCKED!";
    //     console.log(toUpdate);
    //     // toUpdate.update(req.body);
    //     member.save(function(err) {
    //         if (err)
    //             res.send(err);
    //
    //         res.json({ message: 'Post updated!!!' });
    //     });
    //
    // });
};

