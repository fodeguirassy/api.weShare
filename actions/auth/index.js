module.exports = (app) => {
  return {
    login : require('./login')(app)
  }
}
