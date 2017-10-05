const sha1 = require('sha1');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
        const User = app.models.User;
        const Token = app.models.Token;

        return function login(req, res, next) {
            User.findOne({
                where: { username: req.body.username, password: sha1(req.body.password)}
            }).then((user) => {
                if(!user) return res.status(401).send('Invalid credentials');
                let token = Token.build({ userId: user.id });
                token.save().then((token) => {
                    jwt.sign({ tokenId : token.id }, app.settings.security.salt, { expiresIn: '1d' }, (err, encryptedToken) => {
                        /*
                        if(err) return res.status(500).send(err);
                        res.send({ user: user, token:encryptedToken });
                        */
                        //user.setToken(encryptedToken)
                        user.token = encryptedToken
                        user.save()
                        res.send({ user: user, token:encryptedToken });
                    });
                }).catch((err) => {
                    return res.status(500).send(err.message);
                });

            }).catch((err) => {
                return res.status(500).send(err.message);
            });
        }
};
