const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

/* (async ()=>{
    await sequelize.sync({ force: true });
    console.log('table created successfully :)')
})(); */

module.exports = User;
