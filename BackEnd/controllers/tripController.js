var Trip = require('../models/trip');

exports.trip_list = function(req, res, next) {
    Trip.find({})
        .then(data => res.json(data))
        .catch(next)
};

exports.trip_create = function(req, res, next){
    console.log("you are in trip create!");
    console.log(req.body);
    if(req.body.title){
        Trip.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "Not all Trip fields filled"
        })
    }
};

exports.trip_delete = function(req, res, next) {
    Trip.remove({ _id: req.body.id }, function(err) {
        if (!err) {
            message.type = 'notification!';
        }
        else {
            message.type = 'error';
        }
    });
};


exports.trip_detail = function(req, res, next) {
    Trip.findById(req.params.trip_id)
        .then(data => res.json(data))
        .catch(next)
};



