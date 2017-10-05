module.exports = (app) => {
    return {
      isAuthenticated : require('./isAuthenticated')(app)
    }
}
