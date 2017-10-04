
const Sequelize = require('sequelize');

module.exports = (app) => {

	return app.sequelize.define('module', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title : {
        	type: Sequelize.STRING
        },
        logo : {
        	type: Sequelize.STRING 
        },
        content : {
        	type : Sequelize.STRING
        }
	})
}