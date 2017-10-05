const router = require ('express').Router()

module.exports = (app) => {
  router.get('/:title',
              app.middlewares.parsers.contents,
              app.actions.contents.findOne
            )
  router.get('/', app.actions.contents.findAll)

  router.post('/',
            //  app.middlewares.security.isAuthenticated,
              app.middlewares.bodyParser.json(),
              app.middlewares.validators.contents,
              app.actions.medias.create,
              app.actions.contents.create
            )
  return router;
}
