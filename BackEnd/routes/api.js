const express = require ('express');
const router = express.Router();
const User = require('../models/user');
const Todo = require('../models/todo');
const PhotoModel = require('../models/photo');
const restaurant_controller = require('../controllers/restaurantController');
const packable_controller = require('../controllers/packableController');
const trip_controller = require('../controllers/tripController');
const post_controller = require('../controllers/postController');
const location_controller = require('../controllers/locationController');
const toDo_controller = require('../controllers/toDoController');


/**
 * Routes for a User
 */
router.get('/users', (req, res, next) => {
    User.find({}, ['email', 'firstName', 'lastName'])
        .then(data => res.json(data))
        .catch(next)
});
router.post('/users', (req, res, next) => {
    console.log(req.body);
    if (req.body.email && req.body.password
        && req.body.firstName && req.body.lastName) {
        User.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    } else {
        res.json({
            error: "Not all required fields filled"
        })
    }
});
router.delete('/users/:id', (req, res, next) => {
    User.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});


/**
 * Routes for a todo
 */
// router.get('/todos', (req, res, next) => {
//     //this will return all the data, exposing only the id and action field to the client
//     Todo.find({}, 'action')
//         .then(data => res.json(data))
//         .catch(next)
// });
//
// router.post('/todos', (req, res, next) => {
//     if(req.body.action){
//         Todo.create(req.body)
//             .then(data => res.json(data))
//             .catch(next)
//     }else {
//         res.json({
//             error: "The input field is empty"
//         })
//     }
// });
// router.delete('/todos/:id', (req, res, next) => {
//     Todo.findOneAndDelete({"_id": req.params.id})
//         .then(data => res.json(data))
//         .catch(next)
// })


/**
 * Routes for restaurants
 */
router.get('/restaurants', restaurant_controller.restaurant_list);
router.get('/restaurants/:id', restaurant_controller.restaurant_detail);
router.post('/restaurants', restaurant_controller.restaurant_create_post);

/*
 * Routes for packables
 */
router.get('/packables', packable_controller.packable_list);
router.get('/packables/:id', packable_controller.packable_detail);
router.post('/packables', packable_controller.packable_create);

/**
 * Routes for trips
 */
router.get('/trips', trip_controller.trip_list);
router.post('/trips', trip_controller.trip_create);
router.get('/trips/:trip_id', trip_controller.trip_detail);
// router.get('/trips/')

/**
 * Routes for posts
 * @type {Router|router}
 */
router.post ('/trips/:trip_id/posts', post_controller.post_create);
router.get('/trips/:trip_id/posts/:post_id', post_controller.post_view);
router.patch('/trips/:trip_id/posts/:post_id', post_controller.post_update);
router.delete('/trips/:trip_id/posts/:post_id', post_controller.post_delete);

/**
 * Routes for locations
 */
router.post ('/trips/:trip_id/locations', location_controller.location_create);
router.get('/trips/:trip_id/locations/:location_id', location_controller.location_view);
router.patch('/trips/:trip_id/locations/:location_id', location_controller.location_update);
router.delete('/trips/:trip_id/locations/:location_id', location_controller.location_delete);

/**
 * Routes for todos
 */
router.post ('/trips/:trip_id/todos', toDo_controller.toDo_create);
router.get('/trips/:trip_id/todos/:todo_id', toDo_controller.toDo_view);
router.patch('/trips/:trip_id/todos/:todo_id', toDo_controller.toDo_update);
router.delete('/trips/:trip_id/todos/:todo_id', toDo_controller.toDo_delete);

module.exports = router;