const mongoose = require('mongoose');

const VacancySchema = new mongoose.Schema({
    id: Number,
    label: String,
    callContent: Array,
    callQuestions: Array,
    interviewContent: Array,
    interviewQuestions: Array
});

mongoose.model('Vacancy', VacancySchema);