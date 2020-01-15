const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = (req, res, next) => {


    next();
};
