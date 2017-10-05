
module.exports = (app) => {
    const User = app.models.User;
    const Specialty = app.models.Specialty;
    const Content = app.models.Content;

    return function(req,res,next) {
      User.findOne({
        where : {id : req.params.userId},
        include : [ {model : Specialty, as :'specialties' }, {model : Content, as : 'contents', include : [{model :  Specialty}]} ]
      }).then((user) => {
          if(!user) return res.status(404).send('User not found')
          return res.send(user)
      })
    }
}
