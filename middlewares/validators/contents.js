
module.exports = (req,res,next) => {
    if(!req.body.title || req.body.title.length < 3 ) return res.status(403).send('Title should at least have 3 characters')
    if(!req.body.description || req.body.description.length < 10) return res.status(403).send('Description should at least have 10 characters')
    next()
}
