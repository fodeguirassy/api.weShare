const router = require ('express').Router()

module.exports = (app) => {
  router.get('/', app.actions.contents.findAll)

  router.get('/:title',
              app.middlewares.parsers.contents,
              app.actions.contents.findOne
            )
  return router;
}
