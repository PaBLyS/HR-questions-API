const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    id: Number,
    label: String,
    answer: String,
});

mongoose.model('Question', QuestionSchema);