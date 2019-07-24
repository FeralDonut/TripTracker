const express = require ('express');
const router = express.Router();
const User = require('../models/user');
const Todo = require('../models/todo');
const PhotoModel = require('../models/photo');
const restaurant_controller = require('../controllers/restaurantController');

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
router.get('/todos', (req, res, next) => {

    //this will return all the data, exposing only the id and action field to the client
    Todo.find({}, 'action')
        .then(data => res.json(data))
        .catch(next)
});
router.post('/todos', (req, res, next) => {
    if(req.body.action){
        Todo.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "The input field is empty"
        })
    }
});
router.delete('/todos/:id', (req, res, next) => {
    Todo.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
})


/**
 * Routes for restaurants
 */
router.get('/restaurants', restaurant_controller.restaurant_list);
router.get('/restaurants/:id', restaurant_controller.restaurant_detail);
router.post('/restaurants', restaurant_controller.restaurant_create_post);



module.exports = router;