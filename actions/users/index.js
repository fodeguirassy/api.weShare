
module.exports = (app) => {
	return {
		findAll	:	require('./findAll')(app),
		create : require('./create')(app),
		findOne : require('./findOne')(app)
	}
}
