const mongoose = require('mongoose');
const bCrypt = require('bcrypt-nodejs');

const User = mongoose.model('User');

const getAll = (req, res) => {
    User.find()
        .exec()
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
};

const create = (req, res) => {
    req.body.password = bCrypt.hashSync(req.body.password);
    req.body.access = req.body.access === true ? true : false
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
}

const update = (req, res) => {
    req.body.password = bCrypt.hashSync(req.body.password);
    req.body.access = req.body.access === true ? true : false
    User.updateOne({ _id: req.params.id }, req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
}

const deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id})
        .exec()
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json(err));
};

module.exports = {
    getAll,
    create,
    update,
    deleteUser
}