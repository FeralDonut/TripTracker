var Restaurant = require('../models/restaurant');

exports.restaurant_list = function(req, res, next) {
    Restaurant.find({})
        .select({
            _id: 1,
            name: 1,
            category: 1,
            address: 1,
            photos: 1
        })
        .then(data => res.json(data))
        .catch(next)
};

exports.restaurant_create_post = function(req, res, next){
    if(req.body.name && req.body.category){
        Restaurant.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "The input field is empty"
        })
    }
};

exports.restaurant_detail = function(req, res, next) {
    Restaurant.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
};
