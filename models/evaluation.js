const Sequelize = require('sequelize');

module.exports = (app) => {

	return app.sequelize.define('evaluation', {
        
        id: {

            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }

	})
}