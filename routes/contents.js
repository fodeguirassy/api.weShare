const router = require ('express').Router()

module.exports = (app) => {
  router.get('/', app.actions.contents.findAll)
  return router;
}
