
module.exports = (app) => {
	const User = app.models.User
	const Specialty = app.models.Specialty
	const Content = app.models.Content
	
	return function findAll(req, res, next){
		User.findAll({
			include : [ {model : Specialty, as:'specialties'}, {model : Content, as:'contents'}]
		}).then((users) => {
				if(!users){
					return res.sendStatus(404)
				}
				return res.send(users)
		})
	}
}
