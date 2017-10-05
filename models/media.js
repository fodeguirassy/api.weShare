const Sequelize = require('sequelize');
/*
"url": "http://192.168.114.127:3001/",
  "uploadsDir": "uploads/"
*/
module.exports = (app) => {
  return app.sequelize.define('medias', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        file : {
            type: Sequelize.STRING
        },
        fileName : {
          type: Sequelize.STRING
        }
	})
}
