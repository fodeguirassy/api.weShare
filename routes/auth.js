const router = require ('express').Router()

module.exports = (app) => {
	router.post('/login',
              app.middlewares.bodyParser.json(),
              app.middlewares.validators.authentications,
              app.actions.auth.login);
	return router;
}
