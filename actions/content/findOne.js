
module.exports = (app) => {
    return function findOne(req,res,next){
        //console.log('I am in actions.contents');
        res.send(req.content)
    }
}
