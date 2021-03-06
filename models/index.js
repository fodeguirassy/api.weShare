module.exports = (app) => {

	console.log('Loading models');

	app.models = {

		User : require('./user')(app),
		Evaluation : require ('./evaluation')(app),
		Content : require ('./content')(app),
		Question : require ('./question')(app),
		Response : require ('./response')(app),
		Specialty : require ('./specialty')(app),
		Token : require ('./token')(app),
		Media : require ('./media')(app)
	};

	app.models.User.hasMany(app.models.Specialty, {as : "specialties"})
	app.models.User.hasMany(app.models.Content, {as : 'contents', onDelete : 'cascade'})
	app.models.Content.hasOne(app.models.Specialty)

	//app.models.Content.hasOne(app.models.User, { as:'owner' })


	app.models.Evaluation.belongsTo(app.models.Content, {onDelete : 'cascade'})
	//app.models.User.hasOne(app.models.Token)
}
