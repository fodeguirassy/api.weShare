module.exports = (app) => {
	app.actions = {
		auth:require('./auth')(app),
		users:require('./users')(app),
		contents:require('./content')(app)
	}
}
