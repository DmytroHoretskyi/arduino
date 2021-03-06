const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");

const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
);

module.exports = User;
