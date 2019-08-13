var Trip = require('../models/trip');

exports.trip_list = function(req, res, next) {
    Trip.find({})
        .then(data => res.json(data))
        .catch(next)
};

exports.trip_create = function(req, res, next){
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
    Trip.deleteOne({ _id: req.params.trip_id }, function(err) {
		res.end('{"success" : "Deleted Successfully", "status" : 200}');
    });
};


exports.trip_detail = function(req, res, next) {
    Trip.findById(req.params.trip_id)
        .then(data => res.json(data))
        .catch(next)
};



