const { Sequelize, DataType, DataTypes } = require('sequelize');
const sequelize = require('../db');
const user = require('../models/user');

const Income = sequelize.define('Income', {
    concept: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }   
});

user.hasMany(Income);
Income.belongsTo(user);

/* (async ()=>{
    await sequelize.sync({ force: true });
    console.log('table created successfully :)')
})(); */

module.exports = Income;