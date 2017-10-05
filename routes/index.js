
module.exports = (app) => {
	app.use('/users', require ('./users')(app)),
	app.use('/auth', require ('./auth')(app)),
	app.use('/contents', require('./contents')(app))
}
