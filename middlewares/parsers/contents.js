module.exports = (app) => {
    const Content = app.models.Content;
    const Specialty = app.models.Specialty;
    return(req,res,next) => {
        Content.findAll({
          where : { title : { $like: '%'+req.params.title+'%' } },
          include : [{model : Specialty}]
        }).then((content) => {
          if(!content){ return res.status(404).send('No content found')}
          req.content = content
          next()
        })
    }
}
