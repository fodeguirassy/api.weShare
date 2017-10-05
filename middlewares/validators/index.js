module.exports = (app) => {
  return {
    users : require('./users'),
    authentications : require('./authentications'),
    contents : require('./contents')
  }
}
