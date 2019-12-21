const mongoose = require('mongoose');

const VacanciesSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: mongoose.Schema.Types.Decimal128,
});

mongoose.model('Vacancies', VacanciesSchema);