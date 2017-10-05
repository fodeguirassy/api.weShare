const Sequelize = require('sequelize');
module.exports = (app) => {
    return app.sequelize.define('token', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        userId : {
            type: Sequelize.INTEGER
        }
    });
};
