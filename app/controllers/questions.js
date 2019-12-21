const mongoose = require('mongoose');

const Questions = mongoose.model('Question');

const getAll = (req, res) => {
    Questions.find()
        .exec()
        .then(products => res.json(products))
        .catch(err => res.status(500).json(err));
};

const create = (req, res) => {
    Questions.create(req.body)
        .then(createProduct => res.json(createProduct))
        .catch(err => res.status(500).json(err));
};

const update = (req, res) => {
    Questions.findOneAndUpdate({ id: req.params.id }, req.body)
        .exec()
        .then(product => res.json(product))
        .catch(err => res.status(500).json(err));
};

const remove = (req, res) => {
    Questions.deleteOne({ id: req.params.id })
        .exec()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(500).json(err));
};

module.exports = {
    getAll,
    create,
    update,
    remove
};