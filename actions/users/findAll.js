
module.exports = (app) => {

	const User = app.models.User

	return function findAll(req, res, next){
		User.findAll().then((users) => {
				if(!users){
					return res.sendStatus(404)
				}
				return res.send(users)
		})
	}
}
