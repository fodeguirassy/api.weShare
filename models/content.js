
const Sequelize = require('sequelize');

module.exports = (app) => {

	return app.sequelize.define('contents', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title : {
        	type: Sequelize.STRING
        },
				description : {
        	type: Sequelize.STRING(1234)
        },
        fileUrl : {
        	type : Sequelize.STRING
        }
	})
}
