const mongoose = require('mongoose');

const VacancySchema = new mongoose.Schema({
    id: Number,
    label: String,
    call: Array,
    interview: Array,
});

mongoose.model('Vacancy', VacancySchema);