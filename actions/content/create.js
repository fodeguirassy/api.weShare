
module.exports = (app) => {
  //req.loggedUser
  return function(req,res,next){
      console.log(req.loggedUser);
  }
}
