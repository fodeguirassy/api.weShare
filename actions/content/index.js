

module.exports = (app) => {
  return {
    findAll:require('./findAll')(app),
    findOne:require('./findOne')(app)
  }
}
