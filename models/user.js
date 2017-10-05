const Sequelize = require('sequelize');

module.exports = (app) => {
	 return app.sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
				token : {
					type: Sequelize.STRING
				}
    });
}
