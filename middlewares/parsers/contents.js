module.exports = (app) => {
    const Content = app.models.Content
    return(req,res,next) => {
        Content.findOne({
          where : { title : req.params.title }
        }).then((content) => {
          if(!content){ return res.status(404).send('No content found')}
          req.content = content
          next()
        })
    }
}
