const Sequelize = require ('sequelize')

module.exports = (app, resolve, reject) => {
	
	app.sequelize =  new Sequelize(app.settings.mysql.database,app.settings.mysql.user,app.settings.mysql.password,
		{dialect: 'mysql'});
	app.sequelize.authenticate()
		.then(() => {
			resolve();
		})
		.catch((err) => {
			console.log(`${err}`)
		})
}