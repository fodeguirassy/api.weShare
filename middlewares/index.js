
module.exports = (app) => {

  console.log('Loading middlewares');

  app.middlewares = {
    validators : require('./validators')(app),
    bodyParser : require('body-parser'),
    parsers : require('./parsers')(app),
    security : require('./security')(app)
  }
}
