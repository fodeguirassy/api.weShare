
module.exports = (app) => {
	
	console.log('Loading actions');
	app.actions = {
		auth:require('./auth')(app),
		users:require('./users')(app),
		contents:require('./content')(app),
		medias : require('./medias')(app)
	}
}
