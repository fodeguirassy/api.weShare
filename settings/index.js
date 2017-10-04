module.exports = (app) => {
	console.log('Loading settings')
	app.settings = require('./settings.json');
}