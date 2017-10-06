
module.exports = (app) => {
  const Media = app.models.Media

  return function create(req, res, next) {
      let media = {
          file: app.settings.url + app.settings.uploadsDir + req.savedfilename,
          filename: req.body.filename,
      };
      Media.build(media).save().then((media) => {
          if (!media) return res.status(500).send("Error saving file");
          res.send(media);
      }).catch((err) => {
          res.status(500).send(err.message);
      });
  }
}
