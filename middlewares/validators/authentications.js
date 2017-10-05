module.exports = (req , res, next) => {
    if (!req.body || !req.body.username || !req.body.password) {
        return res.status(400).send('Missing authentification fields (username, password)');
    }
    if (req.body.username.length < 2) {
        return res.status(400).send('Wrong username value. (min length: 2)');
    }
    if (req.body.password.length < 4) {
        return res.status(400).send('Wrong password value. (min length: 4)');
    }
    return next();
};
