const express = require('express');
const mongoose = require('mongoose');
require('./app/models');
const config = require('./config');

const app = express();
config.express(app);
config.routes(app);

const { appPort, mongoUrl } = config.app;

mongoose.connect(mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => app.listen(
        appPort,
        () => console.log('Listening on port ' + appPort + '...')
    ))
    .catch((err) => console.error('Error connection to mongo: ' + mongoUrl + err));