const multer = require('multer');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = (app) => {

  console.log('Loading middlewares');

/*
  mkdirp(app.settings.uploadsDir, function (err) {
       if (err) console.error(err);
   });
*/
   let storage = multer.diskStorage({
       destination: function(req, file, callback) {
         callback(null, app.settings.uploadsDir)
       },
       filename: function (req, file, callback) {
           //req.filename = req.loggedUser.id + "_" + Date.now() + path.extname(file.originalname);
          //req.filename = path.extname(file.originalname)
           callback(null, req.body.filename+ "_" + Date.now()+ path.extname(file.originalname));
       }
   });

  app.middlewares = {
    validators : require('./validators')(app),
    bodyParser : require('body-parser'),
    parsers : require('./parsers')(app),
    security : require('./security')(app),
    uploader : multer({storage : storage})
  }

}
