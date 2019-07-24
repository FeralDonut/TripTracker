var Trip = require('../models/Trip');

exports.trip_list = function(req, res, next) {
    Trip.find({})
        .select({
            _id: 1,
            title: 1,
            category: 1,
            description: 1,
            icon: 1
        })
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

exports.trip_detail = function(req, res, next) {
    Trip.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
};
