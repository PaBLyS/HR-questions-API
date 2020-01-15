const mongoose = require('mongoose');

const Questions = mongoose.model('Question');

const getAll = (req, res) => {
    Questions.find()
        .exec()
        .then(questions => res.json(questions))
        .catch(err => res.status(500).json(err));
};

const create = (req, res) => {
    Questions.create(req.body)
        .then(createQuestions => res.json(createQuestions))
        .catch(err => res.status(500).json(err));
};

const update = (req, res) => {
    Questions.updateOne({ id: req.params.id }, req.body)
        .exec()
        .then(questions => res.json(questions))
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