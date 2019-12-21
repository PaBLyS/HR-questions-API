const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('./app/models');
const config = require('./config');

const app = express();

app.use(cors());

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