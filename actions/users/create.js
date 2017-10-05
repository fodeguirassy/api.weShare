module.exports = (app) => {
    const User = app.models.User;
    return function create(req, res, next) {
        User.upsert(req.body).then(function (result) {
            if (result) return res.send(result);
        }).catch((err) => {
            res.status(500).send(err.message);
        });
    }
};
