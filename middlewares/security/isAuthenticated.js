module.exports = (app) => {

  const User = app.models.User;
  const Specialty = app.models.Specialty;
  const Token = app.models.Token;

  return (req, res, next) => {
        if(!req.headers || !req.headers.authorization) return res.status(403).send('Authentication required');
        console.log('token is  ' + req.headers.authorization);

        User.findOne({
            where: { token: req.headers.authorization },
            include: [ { model: Specialty, as :'specialties'} ]
        }).then((user) => {
            if (!user) return res.status(403).send('Invalid credentials');
            req.loggedUser = user;
            next();
        }).catch((err) => {
            res.status(500).send(err.message);
        })
    }
}
