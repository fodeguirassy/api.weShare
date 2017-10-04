module.exports = (app) => {

	app.models = {
		User : require('./user')(app),
		Evaluation : require ('./evaluation')(app),
		Module : require ('./module')(app),
		Question : require ('./question')(app),
		Response : require ('./response')(app),
		Specialty : require ('./Specialty')(app)
	};

	app.models.User.hasMany(app.models.Module, {onDelete : 'cascade'})
	app.models.Module.belongsToMany(app.models.User, {through : 'students', onDelete : 'cascade'})
	app.models.Evaluation.belongsTo(app.models.Module, {onDelete : 'cascade'})
	app.models.User.hasMany(app.models.Specialty)

}
