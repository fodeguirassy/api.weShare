
module.exports = (app) => {
    return function findOne(req,res,next){
        res.send(req.content)
    }
}
