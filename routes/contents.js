const router = require ('express').Router()

module.exports = (app) => {
  router.get('/:title',
              app.middlewares.parsers.contents,
              app.actions.contents.findOne
            )
  router.get('/', app.actions.contents.findAll)

  router.post('/',
            //  app.middlewares.security.isAuthenticated,
              app.middlewares.bodyParser.json(),
              //app.middlewares.validators.contents,
              app.middlewares.uploader.single("picture"),
              app.actions.medias.create,
              app.actions.contents.create
            )
  return router;
}

/*

function(req,res,next){
  var file_name = req.body.filename;
  var file_content = req.body.content;
  file_content = file_content.replace(/\n/g, "\r\n");

  var stream = fs.createWriteStream(file_name+".txt");
  stream.once('open', function () {
      stream.write(file_content);
      stream.end();
  });
}

*/
