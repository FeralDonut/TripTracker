var Packable = require('../models/packable');

exports.packable_list = function(req, res, next) {
    Packable.find({})
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

exports.packable_create = function(req, res, next){
    if(req.body.title && req.body.category){
        Packable.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "Not all Packable fields filled"
        })
    }
};

exports.packable_detail = function(req, res, next) {
    Packable.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
};
