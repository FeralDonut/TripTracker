var ToDo = require('../models/toDo');
var Trip = require('../models/trip');

exports.toDo_create = function(req, res, next){
    Trip.findById(req.params.trip_id, function(err, member) {
        if (err)
            return (err);

        new_toDo = new ToDo(req.body);

        if(member.blog == undefined){
            member.blog = [new_toDo];

        }
        else{
            member.blog.push(new_toDo);
        }

        member.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Address created!!!' });
        });

    });
};

exports.toDo_view = function(req, res, next) {
    Trip.findById(req.params.trip_id, 'title',function(err, member) {
        if (err)
            return (err);

        console.log(member.blog);
        console.log(req.params.blog_id);
        var toDo = member.blog.id(req.params.blog_id);
        console.log(toDo);

        if (err)
            res.send(err);
        else
            res.json(member);
    });
};

exports.toDo_delete = function(req, res, next) {
    console.log(req.params);
    Trip.findById(req.params.trip_id, function(err, member) {
        if (err)
            return (err);


        member.blog.pull(req.params.toDo_id);

        member.save(function(err) {
            if (err)
                res.send(err);

            res.json(member);
        });

    });
};


exports.toDo_update = function(req, res, next){
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
    //     var toUpdate = member.blog.id(req.params.toDo_id);
    //     toUpdate.update(req.body);
    //     // toUpdate.title = "GET FUCKED!";
    //     console.log(toUpdate);
    //     // toUpdate.update(req.body);
    //     member.save(function(err) {
    //         if (err)
    //             res.send(err);
    //
    //         res.json({ message: 'ToDo updated!!!' });
    //     });
    //
    // });
};

