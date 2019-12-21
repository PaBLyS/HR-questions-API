const products = require('../app/controllers/vacancies');

module.exports = (app) => {
    // vacancies
    app.get('/vacancies', products.getAll);
    app.post('/vacancies', products.create);
    app.put('/vacancies/:id', products.update);
    app.delete('/vacancies/:id', products.remove);
};

