const { Sequelize, DataType, DataTypes } = require('sequelize');
const sequilize = require('../db');
const user = require('./user');

const Egress = sequilize.define('Egress', {
    concept: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

user.hasMany(Egress);
Egress.belongsTo(user);

/* (async ()=>{
    await sequilize.sync({force: true});
    console.log('table created successfully :)');
})() */

module.exports = Egress;