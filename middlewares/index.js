
module.exports = (app) => {
  app.middlewares = {
    validators : require('./validators')(app),
    bodyParser : require('body-parser'),
    parsers : require('./parsers')(app)
  }
}
