var Packable = require('../models/packable');
var Trip = require('../models/trip');
var PackingEntry = require('../models/packingEntry');

exports.packable_create = function(req, res, next){
    Trip.findById(req.params.trip_id, function(err, member) {
        if (err)
            return (err);

        new_packable = new Packable(req.body);

        if(member.blog == undefined){
            member.blog = [new_packable];

        }
        else{
            member.blog.push(new_packable);
        }

        member.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Address created!!!' });
        });

    });
};

exports.packable_view = function(req, res, next) {
    Trip.findById(req.params.trip_id, function(err, member) {
        if (err)
            return (err);

        console.log(member.blog);
        console.log(req.params.blog_id);
        var packable = member.blog.id(req.params.blog_id);

        member.save(function(err) {
            if (err)
                res.send(err);

            res.json(packable);
        });

    });
};

exports.packable_delete = function(req, res, next) {
    console.log(req.params);
    Trip.findById(req.params.trip_id, function(err, member) {
        if (err)
            return (err);


        member.blog.pull(req.params.packable_id);

        member.save(function(err) {
            if (err)
                res.send(err);

            res.json(member);
        });

    });
};


exports.packable_update = function(req, res, next){
    console.log(req.params);
    console.log(req.body);
    Trip.findByIdAndUpdate(req.params.trip_id,
        {"blog._id": req.params.blog_id}
    )
        .then(data => res.json(data))
        .catch(next)



    //
    // Trip.findById(req.params.trip_id, function(err, member) {
    //     console.log(member);
    //     if (err)
    //         return (err);
    //
    //     var toUpdate = member.blog.id(req.params.packable_id);
    //     toUpdate.update(req.body);
    //     // toUpdate.title = "GET FUCKED!";
    //     console.log(toUpdate);
    //     // toUpdate.update(req.body);
    //     member.save(function(err) {
    //         if (err)
    //             res.send(err);
    //
    //         res.json({ message: 'Packable updated!!!' });
    //     });
    //
    // });
};

