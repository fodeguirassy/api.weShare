const router = require ('express').Router()

module.exports = (app) => {

	router.get('/', app.actions.users.findAll);

	router.get('/:userId',
						app.actions.users.findOne
					);

	router.post('/',
						app.middlewares.bodyParser.json(),
						app.middlewares.validators.users,
						app.actions.users.create);

	return router;
}
