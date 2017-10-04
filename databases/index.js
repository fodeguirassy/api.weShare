const Promise = require('bluebird').Promise

module.exports = (app) => {
	console.log('Loading databases')

	return new Promise((resolve, reject) => {
		require ('./mysql.js')(app, resolve, reject);
	})
}