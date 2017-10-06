const multer = require('multer');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = (app) => {

  console.log('Loading middlewares');

  mkdirp(app.settings.uploadsDir, function (err) {
       if (err) console.error(err);
   });
   let storage = multer.diskStorage({
       destination: app.settings.uploadsDir,
       filename: function (req, file, cb) {
           //req.filename = req.loggedUser.id + "_" + Date.now() + path.extname(file.originalname);
          req.filename = path.extname(file.originalname)
           cb(null, req.filename);
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
