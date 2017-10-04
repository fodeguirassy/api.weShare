const router = require ('express').Router()

module.exports = (app) => {
	router.get('/', app.actions.users.findAll);
	return router;
}
