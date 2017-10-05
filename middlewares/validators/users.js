module.exports = (req, res, next) => {
    if(req.body.username.length < 5){
      return res.status(400).send('Username must at least have 5 characters')
    }
    if(req.body.password.length < 5)
    {
      return res.status(400).send('Password must at least have 5 characters')
    }
    next();
}
