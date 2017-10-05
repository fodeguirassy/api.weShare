const router = require ('express').Router()

module.exports = (app) => {
  router.get('/:title',
              app.middlewares.parsers.contents,
              app.actions.contents.findOne
            )

  router.get('/', app.actions.contents.findAll)

  return router;
}
