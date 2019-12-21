const vacancies = require('../app/controllers/vacancies');
const questions = require('../app/controllers/questions');

module.exports = (app) => {
    // vacancies
    app.get('/vacancies', vacancies.getAll);
    app.post('/vacancies', vacancies.create);
    app.put('/vacancies/:id', vacancies.update);
    app.delete('/vacancies/:id', vacancies.remove);

    // questions
    app.get('/questions', questions.getAll);
    app.post('/questions', questions.create);
    app.put('/questions/:id', questions.update);
    app.delete('/questions/:id', questions.remove);
};

