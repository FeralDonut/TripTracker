const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5003;

//connect to the database
mongoose.connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log(`Database connected successfully`))
    .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
