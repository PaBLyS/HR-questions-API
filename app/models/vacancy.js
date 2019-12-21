const mongoose = require('mongoose');

const VacancySchema = new mongoose.Schema({
    id: Number,
    label: String,
    call: Object,
    interview: Object,
});

mongoose.model('Vacancy', VacancySchema);