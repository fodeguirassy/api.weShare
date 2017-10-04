
module.exports = (app) => {
	return {
		findAll:require('./findAll')(app)
	}
}
