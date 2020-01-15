const mongoose = require('mongoose');

const Vacancy = mongoose.model('Vacancy');

const getAll = (req, res) => {
    Vacancy.find()
        .exec()
        .then(products => res.json(products))
        .catch(err => res.status(500).json(err));
};

const getOne = (req, res) => {
    Vacancy.findOne({ id: req.params.id })
        .exec()
        .then(vacancy => res.json(vacancy))
        .catch(err => res.status(500).json(err));
};

const create = (req, res) => {
    Vacancy.create(req.body)
        .then(createVacancy => res.json(createVacancy))
        .catch(err => res.status(500).json(err));
};

const update = (req, res) => {
    Vacancy.updateOne({ id: req.params.id }, req.body)
        .exec()
        .then(vacancy => res.json(vacancy))
        .catch(err => res.status(500).json(err));
};

const remove = (req, res) => {
    Vacancy.deleteOne({id: req.params.id})
        .exec()
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json(err));
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
};