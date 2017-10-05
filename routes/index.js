const cors = require('cors');

module.exports = (app) => {

	console.log('Loading routes');

	app.use(cors())
	app.use('/users', require ('./users')(app));
	app.use('/auth', require ('./auth')(app));
	app.use('/contents', require('./contents')(app))
	app.use((err, req, res, next) => {
		console.error(err);
		next()
	});
}
