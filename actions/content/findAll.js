
module.exports = (app) => {
  const User = app.models.User
  const Specialty = app.models.Specialty
  const Content = app.models.Content

  return function(req, res, next) {
    console.log('I am in normal findAll');
    Content.findAll({include : [{model : Specialty}]}).then((contents) => {
      if(contents){return res.send(contents)}
      return res.status(404).send('No content found')
    })
  }
}
