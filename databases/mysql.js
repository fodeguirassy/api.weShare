const Sequelize = require ('sequelize')

const dialect = process.ENV.DB_DIALECT || 'mysql';

module.exports = (app, resolve, reject) => {

	app.sequelize =  new Sequelize(app.settings.mysql.database,app.settings.mysql.user,app.settings.mysql.password,
		{dialect: dialect});
	app.sequelize.authenticate()
		.then(() => {
			resolve();
		})
		.catch((err) => {
			console.log(`${err}`)
		})
}
