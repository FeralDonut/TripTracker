var ToDo = require('../models/todo');
var Trip = require('../models/trip');

exports.toDo_create = function(req, res, next){
    Trip.findById(req.params.trip_id, function(err, trip) {
        if (err)
            return (err);

        new_toDo = new ToDo(req.body);

        // Either create the todos array, or push a new instance to the array
        if(trip.todos == undefined){
            trip.todos = [new_toDo];
        }
        else{
            trip.todos.push(new_toDo);
        }

        trip.save(function(err) {
            if (err)
                res.send(err);

            res.json(new_toDo);
        });

    });
};

exports.toDo_view = function(req, res, next) {
    Trip.findById(req.params.trip_id, 'title todos',function(err, trip) {
        if (err)
            return (err);

        toReturn = trip.todos.id(req.params.todo_id);

        // If the subdocument doesn't exist, can't return it
        if (toReturn == undefined)
            res.json({message: "Trip doesn't contain this subdocument"});
        else {
            toReturn.trip_title = trip.title;
            toReturn.trip_description = trip.description;
            res.json(toReturn);
        }

    });
};

exports.toDo_delete = function(req, res, next) {
    console.log(req.params);
    Trip.findById(req.params.trip_id, function(err, trip) {
        if (err)
            return (err);


        trip.todos.pull(req.params.todo_id);

        trip.save(function(err) {
            if (err)
                res.send(err);

            res.json(trip);
        });

    });
};


exports.toDo_update = function(req, res, next){
    Trip.findById(req.params.trip_id, function(err, trip) {
        var toDo = trip.todos.id(req.params.todo_id).set(req.body);

        trip.save().then(function(savedTrip) {
            var toReturn = savedTrip.todos.id(req.params.todo_id);
            res.send(toReturn);
        }).catch(function(error) {
            res.status(500).send(err);
        })
    })
};

