const controllers = require('../app/controllers');
const middleware = require('../app/middleware');

module.exports = (app) => {
    // vacancies
    app.get('/vacancies', middleware.auth, controllers.vacancies.getAll);
    app.get('/vacancies/:id', middleware.auth, controllers.vacancies.getOne);
    app.post('/vacancies', middleware.auth,  middleware.access, controllers.vacancies.create);
    app.put('/vacancies/:id', middleware.auth,  middleware.access, controllers.vacancies.update);
    app.delete('/vacancies/:id', middleware.auth,  middleware.access, controllers.vacancies.remove);

    // questions
    app.get('/questions', middleware.auth, controllers.questions.getAll);
    app.post('/questions', middleware.auth,  middleware.access, controllers.questions.create);
    app.put('/questions/:id', middleware.auth,  middleware.access, controllers.questions.update);
    app.delete('/questions/:id', middleware.auth,  middleware.access, controllers.questions.remove);

    // auth
    app.post('/signin', controllers.auth.signIn);
    app.post('/refresh-tokens', controllers.auth.refreshTokens);

    // user
    app.get('/user', middleware.auth,  middleware.access, controllers.user.getAll);
    app.post('/user', middleware.auth,  middleware.access, controllers.user.create);
    app.put('/user/:id', middleware.auth,  middleware.access, controllers.user.update);
    app.delete('/user/:id', middleware.auth,  middleware.access, controllers.user.deleteUser)
};